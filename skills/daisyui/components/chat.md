### Chat
A chat bubble shows one line of a conversation and its related data. This data can include the author image, name, and time.

[Chat documentation](https://daisyui.com/components/chat/)

#### Class names
- component: `chat`
- part: `chat-image`, `chat-header`, `chat-footer`, `chat-bubble`
- placement: `chat-start`, `chat-end`
- color: `chat-bubble-neutral`, `chat-bubble-primary`, `chat-bubble-secondary`, `chat-bubble-accent`, `chat-bubble-info`, `chat-bubble-success`, `chat-bubble-warning`, `chat-bubble-error`

#### Syntax
```html
<div class="chat {PLACEMENT}">
  <div class="chat-image"></div>
  <div class="chat-header"></div>
  <div class="chat-bubble {COLOR}">Message text</div>
  <div class="chat-footer"></div>
</div>
```

#### Rules
- You must specify `{PLACEMENT}` as `chat-start` or `chat-end`.
- `{COLOR}` is optional. It can be one of the color class names.
- To add an avatar, use `<div class="chat-image avatar">`. Put the avatar content in this element.
