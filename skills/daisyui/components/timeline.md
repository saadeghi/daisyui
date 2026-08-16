### Timeline
Use a timeline to show a list of events in chronological order.

[Timeline documentation](https://daisyui.com/components/timeline/)

#### Class names
- component: `timeline`
- part: `timeline-start`, `timeline-middle`, `timeline-end`
- modifier: `timeline-snap-icon`, `timeline-box`, `timeline-compact`
- direction: `timeline-vertical`, `timeline-horizontal`

#### Syntax
```html
<ul class="timeline {MODIFIER}">
  <li>
    <div class="timeline-start">{start}</div>
    <div class="timeline-middle">{icon}</div>
    <div class="timeline-end">{end}</div>
  </li>
</ul>
```

#### Rules
- `{MODIFIER}` is optional. It can include one modifier class name and one direction class name.
- The default timeline is vertical. You can also add the `timeline-vertical` class to the `ul` element.
- Add `timeline-snap-icon` to put the icon at the start instead of the middle.
- Add the `timeline-compact` class to put all items on one side.
