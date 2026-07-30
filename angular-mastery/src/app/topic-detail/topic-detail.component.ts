import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { Topic, TopicContent } from '../topics/topic.model';
import { TOPIC_CONTENT } from '../topics/topics.content';
import { TOPICS } from '../topics/topics.data';

@Component({
  selector: 'app-topic-detail',
  imports: [RouterLink],
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

  protected readonly previous = computed(() => this.sibling(-1));
  protected readonly next = computed(() => this.sibling(1));

  private sibling(step: number): Topic | undefined {
    const current = this.topic();
    if (!current) {
      return undefined;
    }
    return TOPICS.find((t) => t.order === current.order + step);
  }
}
