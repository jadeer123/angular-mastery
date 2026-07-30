import { Pipe, PipeTransform } from '@angular/core';

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

/** Renders the small subset of inline markdown used by the lesson content. */
@Pipe({ name: 'inlineMarkdown' })
export class InlineMarkdownPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/[&<>"]/g, (char) => ESCAPES[char])
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  }
}
