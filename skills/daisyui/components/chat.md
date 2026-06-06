### chat
Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc

[chat docs](https://daisyui.com/components/chat/)

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
- {PLACEMENT} is required and must be either `chat-start` or `chat-end`
- {COLOR} is optional and can have one of the color class names
- To add an avatar, use `<div class="chat-image avatar">` and nest the avatar content inside
