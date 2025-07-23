# Badge Component


## Usage

Import the Badge component in your file:

```jsx
import Badge from "./components/Badge";
```

## Props

| Prop        | Type     | Description                                                      | Default  |
|-------------|----------|------------------------------------------------------------------|----------|
| badgeColor  | string   | Sets the badge color. Accepts: `grey`, `red`, `yellow`, `green`, `blue`, `indigo`, `purple`, `pink`. | `grey`   |
| shape       | string   | Sets the badge shape. Accepts: `square`, `pill`.                 | `square` |
| className   | string   | Additional custom class names for the badge.                     | —        |
| children    | node     | Content to display inside the badge. If `children` is `null` or `undefined`, the badge will display the default label "Badge". If `children` is an empty string (`""`), the badge will render empty. | —        |


## Example

```jsx
// Renders a badge with the text "Success"
<Badge badgeColor="green" shape="pill">
  Success
</Badge>

// Renders a badge with the text "Error"
<Badge badgeColor="red" shape="square" className="my-custom-class">
  Error
</Badge>

// Renders a badge with the default label "Badge"
<Badge badgeColor="blue" shape="pill" />

// Renders an empty badge (no text)
<Badge badgeColor="yellow" shape="square">{""}</Badge>
```

## Styling

- The component uses styles from [`Badge.css`](./Badge.css) for base, shape, and color classes.
- You can add your own custom styles by passing a `className` prop.
- Global styles can be added in [`index.css`](../../index.css) if needed.

## File Structure

```
Badge/
  ├─ Badge.jsx      // The Badge component implementation
  ├─ Badge.css      // Styles for the Badge component
  ├─ index.js       // Re-exports Badge for easy importing
  └─ README.md      // This documentation
```

## Notes
- The Badge component is designed for flexibility and reusability.
- Extend the color and shape options by adding new classes in `Badge.css` and passing the corresponding prop value.
