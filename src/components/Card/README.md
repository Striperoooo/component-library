# Card Component

## Usage

Import the Card component in your file:

```jsx
import Card from "./components/Card";
```

## Props

| Prop           | Type     | Description                                                                 | Default         |
|----------------|----------|-----------------------------------------------------------------------------|----------------|
| icon           | node     | Icon to display above the card. If not provided, a default icon is shown.   | Default icon   |
| iconBackground | string   | Background color for the icon container.                                    | #3F75FE        |
| title          | string   | The main title or heading for the card.                                     | Card Title     |
| className      | string   | Additional custom class names for the card container.                       | —              |
| style          | object   | Inline styles for the card container.                                       | —              |
| children       | node     | Content to display as the card description. If not provided, a default lorem text is shown. | —              |

## Example

```jsx
// Renders a card with a custom icon, title, and description
<Card icon={<MyIcon />} iconBackground="#F87171" title="Upload Files">
  Drag and drop your files here to upload.
</Card>

// Renders a card with only a title
<Card title="Simple Card" />

// Renders a card with custom styles
<Card title="Styled Card" style={{ backgroundColor: '#fff7e6', boxShadow: '0px 4px 25px 0px rgba(0,0,0,0.10)' }}>
  This card has custom background and shadow.
</Card>

// Renders a card with custom class
<Card title="Info Card" className="my-card">
  This is an informational card.
</Card>
```

## Styling

- The component uses styles from [`Card.css`](./Card.css) for base, layout, and icon classes.
- You can add your own custom styles by passing a `className` prop.
- Inline styles can be applied using the `style` prop.
- Global styles can be added in [`index.css`](../../index.css) if needed.

## File Structure

```
Card/
  ├─ Card.jsx      // The Card component implementation
  ├─ Card.css      // Styles for the Card component
  ├─ index.js      // Re-exports Card for easy importing
  └─ README.md     // This documentation
```

## Notes
- The Card component is designed for flexibility and reusability.
- The icon displayed can be customized via the `icon` prop and its background via `iconBackground`.
- Extend the card by adding new styles or props as needed.
- For consistent documentation, see the Badge and Banner component READMEs for similar usage and prop patterns.
