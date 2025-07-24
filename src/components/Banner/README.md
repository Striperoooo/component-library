# Banner Component


## Usage

Import the Banner component in your file:

```jsx
import Banner from "./components/Banner";
```

## Props

| Prop       | Type     | Description                                                                 | Default   |
|------------|----------|-----------------------------------------------------------------------------|-----------|
| type       | string   | Sets the banner type. Accepts: `success`, `warning`, `error`, `neutral`.     | `success` |
| title      | string   | The main title or heading for the banner.                                   | `Banner Title` |
| className  | string   | Additional custom class names for the banner.                               | —         |
| style      | object   | Inline styles for the banner container.                                     | —         |
| children   | node     | Content to display as the banner description. If not provided, only the title is shown. | —         |

## Example

```jsx
// Renders a success banner with a title and description
<Banner type="success" title="Congratulations!">
  Your profile has been updated successfully.
</Banner>

// Renders a warning banner with only a title
<Banner type="warning" title="Warning!" />

// Renders an error banner with custom styles
<Banner type="error" title="Error!" style={{ backgroundColor: '#fff0f0' }}>
  Something went wrong. Please try again.
</Banner>

// Renders a neutral banner with custom class
<Banner type="neutral" title="Info" className="my-banner">
  This is an informational message.
</Banner>
```

## Styling

- The component uses styles from [`Banner.css`](./Banner.css) for base, type, and layout classes.
- You can add your own custom styles by passing a `className` prop.
- Inline styles can be applied using the `style` prop.
- Global styles can be added in [`index.css`](../../index.css) if needed.

## File Structure

```
Banner/
  ├─ Banner.jsx      // The Banner component implementation
  ├─ Banner.css      // Styles for the Banner component
  ├─ index.js        // Re-exports Banner for easy importing
  └─ README.md       // This documentation
```

## Notes
- The Banner component is designed for flexibility and reusability.
- The icon displayed is determined by the `type` prop.
- Extend the type options by adding new icons and classes in `Banner.css` and updating the `iconMap` in `Banner.jsx`.
- For consistent documentation, see the Badge component's README for similar usage and prop patterns.
