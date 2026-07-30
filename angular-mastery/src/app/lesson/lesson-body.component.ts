import { Component, input } from '@angular/core';

import { LessonBlock } from '../topics/topic.model';
import { InlineMarkdownPipe } from './inline-markdown.pipe';

@Component({
  selector: 'app-lesson-body',
  imports: [InlineMarkdownPipe],
  templateUrl: './lesson-body.component.html',
  styleUrl: './lesson-body.component.scss'
})
export class LessonBodyComponent {
  blocks = input.required<LessonBlock[]>();
}
