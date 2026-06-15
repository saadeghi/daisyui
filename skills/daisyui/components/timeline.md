### timeline
Timeline component shows a list of events in chronological order

[timeline docs](https://daisyui.com/components/timeline/)

#### Class Names:
- Component: `timeline`
- Part: `timeline-start`, `timeline-middle`, `timeline-end`
- Modifier: `timeline-snap-icon`, `timeline-box`, `timeline-compact`
- Direction: `timeline-vertical`, `timeline-horizontal`

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
- {MODIFIER} is optional and can have one of the modifier/direction class names
- To make a vertical timeline, add the `timeline-vertical` class to the `ul` element or just do nothing (because its the default style.)
- Add `timeline-snap-icon` to snap the icon to the start instead of middle
- Add the `timeline-compact` class to force all items on one side
