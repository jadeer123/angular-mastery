import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { LessonBodyComponent } from '../lesson/lesson-body.component';
import { LessonBlock, Topic, TopicContent } from '../topics/topic.model';
import { TOPIC_CONTENT } from '../topics/topics.content';
import { TOPICS } from '../topics/topics.data';
import { loadLesson } from '../topics/topics.lessons';

@Component({
  selector: 'app-topic-detail',
  imports: [RouterLink, LessonBodyComponent],
  templateUrl: './topic-detail.component.html',
  styleUrl: './topic-detail.component.scss'
})
export class TopicDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  protected readonly topic = computed(() => TOPICS.find((t) => t.slug === this.slug()));
  protected readonly content = computed<TopicContent | undefined>(
    () => TOPIC_CONTENT[this.slug()]
  );

  protected readonly lesson = signal<LessonBlock[]>([]);
  protected readonly lessonLoading = signal(false);

  protected readonly previous = computed(() => this.sibling(-1));
  protected readonly next = computed(() => this.sibling(1));

  constructor() {
    effect(() => {
      const slug = this.slug();
      this.lesson.set([]);
      this.lessonLoading.set(true);
      window.scrollTo({ top: 0 });
      loadLesson(slug).then((blocks) => {
        if (this.slug() !== slug) {
          return;
        }
        this.lesson.set(blocks);
        this.lessonLoading.set(false);
      });
    });
  }

  private sibling(step: number): Topic | undefined {
    const current = this.topic();
    if (!current) {
      return undefined;
    }
    return TOPICS.find((t) => t.order === current.order + step);
  }
}
