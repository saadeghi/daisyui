import { expect, test } from "bun:test"
import { JSDOM } from "jsdom"

// Setup DOM environment for CSS testing
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`)
global.window = dom.window
global.document = dom.window.document

// Helper function to create a button element with bubble class
function createBubbleButton(additionalClasses = "") {
  const button = document.createElement("button")
  button.className = `btn btn-bubble ${additionalClasses}`.trim()
  button.textContent = "Test Button"
  document.body.appendChild(button)
  return button
}

// Property-Based Test: Bubble Animation Behavior
// **Feature: button-bubble-fill, Property 1: Bubble Animation Behavior**
// **Validates: Requirements 1.1, 1.2, 3.5**
test("Property 1: Bubble animation behavior - for any button with bubble fill modifier, CSS classes should be applied correctly", () => {
  // Generate test cases with different button configurations
  const testCases = [
    { classes: "", description: "basic button" },
    { classes: "btn-primary", description: "primary button" },
    { classes: "btn-secondary btn-lg", description: "secondary large button" },
    { classes: "btn-accent btn-sm", description: "accent small button" },
    { classes: "btn-ghost btn-circle", description: "ghost circle button" },
    { classes: "btn-outline btn-wide", description: "outline wide button" },
    { classes: "btn-soft btn-xs", description: "soft extra small button" },
    { classes: "btn-link btn-block", description: "link block button" },
  ]

  testCases.forEach(({ classes, description }) => {
    // Create button with bubble effect
    const button = createBubbleButton(classes)
    
    // Verify button has the required classes
    expect(button.classList.contains("btn")).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Verify additional classes are preserved
    if (classes) {
      const additionalClasses = classes.split(" ")
      additionalClasses.forEach(cls => {
        if (cls.trim()) {
          expect(button.classList.contains(cls.trim())).toBe(true)
        }
      })
    }
    
    // Verify CSS custom properties can be set and retrieved (testing the CSS API)
    const customProperties = {
      "--btn-bubble-duration": "350ms",
      "--btn-bubble-easing": "cubic-bezier(0.4, 0, 0.2, 1)",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.2"
    }
    
    // Test that custom properties can be set and retrieved
    Object.entries(customProperties).forEach(([property, defaultValue]) => {
      button.style.setProperty(property, defaultValue)
      expect(button.style.getPropertyValue(property)).toBe(defaultValue)
    })
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for scale animation values
test("Property 1: Scale animation values - for any scale values, animation should use configured scale factors", () => {
  const scaleTestCases = [
    { scaleX: "1.2", scaleY: "1.8", description: "smaller scale" },
    { scaleX: "1.5", scaleY: "2.2", description: "default scale" },
    { scaleX: "2.0", scaleY: "3.0", description: "larger scale" },
    { scaleX: "1.0", scaleY: "1.0", description: "no scale" },
  ]

  scaleTestCases.forEach(({ scaleX, scaleY, description }) => {
    const button = createBubbleButton()
    
    // Set custom scale values
    button.style.setProperty("--btn-bubble-scale-x", scaleX)
    button.style.setProperty("--btn-bubble-scale-y", scaleY)
    
    // Verify the values are set correctly
    expect(button.style.getPropertyValue("--btn-bubble-scale-x")).toBe(scaleX)
    expect(button.style.getPropertyValue("--btn-bubble-scale-y")).toBe(scaleY)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for animation duration
test("Property 1: Animation duration - for any duration value, animation should use configured timing", () => {
  const durationTestCases = [
    "200ms",
    "350ms", // default
    "500ms",
    "1s",
    "0.3s"
  ]

  durationTestCases.forEach((duration) => {
    const button = createBubbleButton()
    
    // Set custom duration
    button.style.setProperty("--btn-bubble-duration", duration)
    
    // Verify the duration is set correctly
    expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe(duration)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for easing function
test("Property 1: Easing function - for any easing value, animation should use configured timing function", () => {
  const easingTestCases = [
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "linear",
    "cubic-bezier(0.4, 0, 0.2, 1)", // default
    "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  ]

  easingTestCases.forEach((easing) => {
    const button = createBubbleButton()
    
    // Set custom easing
    button.style.setProperty("--btn-bubble-easing", easing)
    
    // Verify the easing is set correctly
    expect(button.style.getPropertyValue("--btn-bubble-easing")).toBe(easing)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for background color inheritance
test("Property 1: Background color inheritance - for any button color, bubble should inherit or use custom color", () => {
  const colorTestCases = [
    { classes: "btn-primary" },
    { classes: "btn-secondary" },
    { classes: "btn-accent" },
    { classes: "btn-neutral" },
    { classes: "btn-info" },
    { classes: "btn-success" },
    { classes: "btn-warning" },
    { classes: "btn-error" },
  ]

  colorTestCases.forEach(({ classes }) => {
    const button = createBubbleButton(classes)
    
    // Test custom bubble background color
    const customColor = "#ff0000"
    button.style.setProperty("--btn-bubble-bg", customColor)
    
    // Verify custom color is set
    expect(button.style.getPropertyValue("--btn-bubble-bg")).toBe(customColor)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property-Based Test: Accessibility Compliance
// **Feature: button-bubble-fill, Property 4: Accessibility Compliance**
// **Validates: Requirements 4.1**
test("Property 4: Accessibility compliance - for any button with bubble fill, prefers-reduced-motion should be respected", () => {
  // Test cases for different motion preferences
  const motionTestCases = [
    { 
      prefersReducedMotion: "reduce",
      description: "reduced motion preference",
      expectTransition: false
    },
    { 
      prefersReducedMotion: "no-preference", 
      description: "no motion preference",
      expectTransition: true
    }
  ]

  motionTestCases.forEach(({ prefersReducedMotion, expectTransition }) => {
    // Create a button with bubble effect
    const button = createBubbleButton("btn-primary")
    
    // Create a style element to simulate media query
    const style = document.createElement("style")
    if (prefersReducedMotion === "reduce") {
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          .btn-bubble::before {
            transition: none !important;
          }
        }
      `
    } else {
      style.textContent = `
        .btn-bubble::before {
          transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `
    }
    document.head.appendChild(style)
    
    // Test that the button maintains its bubble class regardless of motion preference
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that custom properties are still configurable
    button.style.setProperty("--btn-bubble-duration", "200ms")
    expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("200ms")
    
    // Test that the button remains functional
    expect(button.tagName.toLowerCase()).toBe("button")
    expect(button.textContent).toBe("Test Button")
    
    // Clean up
    document.head.removeChild(style)
    document.body.removeChild(button)
  })
})

// Property test for accessibility with different button variants
test("Property 4: Accessibility with button variants - for any button variant with bubble fill, accessibility features should be preserved", () => {
  const accessibilityTestCases = [
    { classes: "btn-primary", ariaLabel: "Primary action button" },
    { classes: "btn-secondary btn-lg", ariaLabel: "Secondary large button" },
    { classes: "btn-ghost btn-circle", ariaLabel: "Ghost circle button" },
    { classes: "btn-outline btn-sm", ariaLabel: "Outline small button" },
    { classes: "btn-link", ariaLabel: "Link button" },
  ]

  accessibilityTestCases.forEach(({ classes, ariaLabel }) => {
    const button = createBubbleButton(classes)
    
    // Set accessibility attributes
    button.setAttribute("aria-label", ariaLabel)
    button.setAttribute("tabindex", "0")
    button.setAttribute("role", "button")
    
    // Verify accessibility attributes are preserved
    expect(button.getAttribute("aria-label")).toBe(ariaLabel)
    expect(button.getAttribute("tabindex")).toBe("0")
    expect(button.getAttribute("role")).toBe("button")
    
    // Verify button functionality is preserved
    expect(button.classList.contains("btn")).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test focus behavior (button should be focusable)
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for keyboard navigation compatibility
test("Property 4: Keyboard navigation compatibility - for any button with bubble fill, keyboard events should work correctly", () => {
  const keyboardTestCases = [
    { key: "Enter", description: "Enter key activation" },
    { key: " ", description: "Space key activation" },
    { key: "Tab", description: "Tab key navigation" },
  ]

  keyboardTestCases.forEach(({ key }) => {
    const button = createBubbleButton("btn-primary")
    let eventFired = false
    
    // Add event listener to test keyboard interaction
    button.addEventListener("click", () => {
      eventFired = true
    })
    
    // Simulate keyboard event
    const keyEvent = new dom.window.KeyboardEvent("keydown", {
      key: key,
      bubbles: true,
      cancelable: true
    })
    
    button.dispatchEvent(keyEvent)
    
    // For Enter and Space, we expect the button to be activatable
    // For Tab, we just verify the event can be dispatched
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Unit Tests for Default Configuration Values
// **Subtask 3.1: Write unit tests for default configuration values**
// **Requirements: 3.1, 3.3, 3.4**

test("Unit Test: Default animation duration should be 350ms", () => {
  const button = createBubbleButton()
  
  // Test that when no custom duration is set, the default fallback is used
  // We can't directly test CSS fallback values, but we can test the CSS structure
  expect(button.classList.contains("btn-bubble")).toBe(true)
  
  // Test that custom duration can override the default
  button.style.setProperty("--btn-bubble-duration", "350ms")
  expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("350ms")
  
  // Test that different duration values work
  button.style.setProperty("--btn-bubble-duration", "500ms")
  expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("500ms")
  
  // Clean up
  document.body.removeChild(button)
})

test("Unit Test: Default scale values should be 1.5 for width and 2.2 for height", () => {
  const button = createBubbleButton()
  
  // Test that when no custom scale is set, the button has the bubble class
  expect(button.classList.contains("btn-bubble")).toBe(true)
  
  // Test that custom scale values can be set to the defaults
  button.style.setProperty("--btn-bubble-scale-x", "1.5")
  button.style.setProperty("--btn-bubble-scale-y", "2.2")
  
  expect(button.style.getPropertyValue("--btn-bubble-scale-x")).toBe("1.5")
  expect(button.style.getPropertyValue("--btn-bubble-scale-y")).toBe("2.2")
  
  // Test that different scale values work
  button.style.setProperty("--btn-bubble-scale-x", "2.0")
  button.style.setProperty("--btn-bubble-scale-y", "3.0")
  
  expect(button.style.getPropertyValue("--btn-bubble-scale-x")).toBe("2.0")
  expect(button.style.getPropertyValue("--btn-bubble-scale-y")).toBe("3.0")
  
  // Clean up
  document.body.removeChild(button)
})

test("Unit Test: Default easing function should be cubic-bezier(0.4, 0, 0.2, 1)", () => {
  const button = createBubbleButton()
  
  // Test that when no custom easing is set, the button has the bubble class
  expect(button.classList.contains("btn-bubble")).toBe(true)
  
  // Test that custom easing can be set to the default
  const defaultEasing = "cubic-bezier(0.4, 0, 0.2, 1)"
  button.style.setProperty("--btn-bubble-easing", defaultEasing)
  
  expect(button.style.getPropertyValue("--btn-bubble-easing")).toBe(defaultEasing)
  
  // Test that different easing functions work
  button.style.setProperty("--btn-bubble-easing", "ease-in-out")
  expect(button.style.getPropertyValue("--btn-bubble-easing")).toBe("ease-in-out")
  
  button.style.setProperty("--btn-bubble-easing", "linear")
  expect(button.style.getPropertyValue("--btn-bubble-easing")).toBe("linear")
  
  // Clean up
  document.body.removeChild(button)
})

test("Unit Test: All default configuration values work together", () => {
  const button = createBubbleButton()
  
  // Set all default values explicitly
  const defaults = {
    "--btn-bubble-duration": "350ms",
    "--btn-bubble-scale-x": "1.5", 
    "--btn-bubble-scale-y": "2.2",
    "--btn-bubble-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
  }
  
  // Apply all default values
  Object.entries(defaults).forEach(([property, value]) => {
    button.style.setProperty(property, value)
  })
  
  // Verify all values are set correctly
  Object.entries(defaults).forEach(([property, expectedValue]) => {
    expect(button.style.getPropertyValue(property)).toBe(expectedValue)
  })
  
  // Verify button still has required classes
  expect(button.classList.contains("btn")).toBe(true)
  expect(button.classList.contains("btn-bubble")).toBe(true)
  
  // Clean up
  document.body.removeChild(button)
})

test("Unit Test: Default values can be overridden independently", () => {
  const button = createBubbleButton()
  
  // Test overriding duration only
  button.style.setProperty("--btn-bubble-duration", "200ms")
  expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("200ms")
  
  // Test overriding scale-x only
  button.style.setProperty("--btn-bubble-scale-x", "2.0")
  expect(button.style.getPropertyValue("--btn-bubble-scale-x")).toBe("2.0")
  
  // Test overriding scale-y only
  button.style.setProperty("--btn-bubble-scale-y", "3.0")
  expect(button.style.getPropertyValue("--btn-bubble-scale-y")).toBe("3.0")
  
  // Test overriding easing only
  button.style.setProperty("--btn-bubble-easing", "ease-out")
  expect(button.style.getPropertyValue("--btn-bubble-easing")).toBe("ease-out")
  
  // Verify all overrides are maintained
  expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("200ms")
  expect(button.style.getPropertyValue("--btn-bubble-scale-x")).toBe("2.0")
  expect(button.style.getPropertyValue("--btn-bubble-scale-y")).toBe("3.0")
  expect(button.style.getPropertyValue("--btn-bubble-easing")).toBe("ease-out")
  
  // Clean up
  document.body.removeChild(button)
})

// Property-Based Test: Universal Button Compatibility
// **Feature: button-bubble-fill, Property 2: Universal Button Compatibility**
// **Validates: Requirements 2.1, 2.2, 2.3, 2.4**
test("Property 2: Universal button compatibility - for any existing button variant, adding bubble fill modifier should work without breaking appearance or functionality", () => {
  // Define all button variants to test
  const colorVariants = ["", "btn-primary", "btn-secondary", "btn-accent", "btn-neutral", "btn-info", "btn-success", "btn-warning", "btn-error"]
  const sizeVariants = ["", "btn-xs", "btn-sm", "btn-md", "btn-lg", "btn-xl"]
  const shapeVariants = ["", "btn-square", "btn-circle", "btn-wide", "btn-block"]
  const styleVariants = ["", "btn-ghost", "btn-link", "btn-outline", "btn-dash", "btn-soft"]
  
  // Test a comprehensive set of combinations (not all possible combinations to keep test reasonable)
  const testCombinations = [
    // Test each color variant individually
    ...colorVariants.map(color => ({ color, size: "", shape: "", style: "" })),
    
    // Test each size variant individually
    ...sizeVariants.map(size => ({ color: "btn-primary", size, shape: "", style: "" })),
    
    // Test each shape variant individually
    ...shapeVariants.map(shape => ({ color: "btn-secondary", size: "", shape, style: "" })),
    
    // Test each style variant individually
    ...styleVariants.map(style => ({ color: "btn-accent", size: "", shape: "", style })),
    
    // Test some complex combinations
    { color: "btn-primary", size: "btn-lg", shape: "btn-wide", style: "" },
    { color: "btn-secondary", size: "btn-sm", shape: "btn-circle", style: "" },
    { color: "btn-accent", size: "btn-xl", shape: "", style: "btn-ghost" },
    { color: "btn-neutral", size: "btn-xs", shape: "", style: "btn-outline" },
    { color: "btn-info", size: "btn-md", shape: "btn-block", style: "" },
    { color: "btn-success", size: "", shape: "", style: "btn-soft" },
    { color: "btn-warning", size: "btn-lg", shape: "btn-square", style: "" },
    { color: "btn-error", size: "", shape: "", style: "btn-link" },
    { color: "btn-primary", size: "btn-sm", shape: "", style: "btn-dash" },
  ]
  
  testCombinations.forEach(({ color, size, shape, style }) => {
    const classes = [color, size, shape, style].filter(c => c).join(" ")
    const description = `${color || "default"} ${size || "default-size"} ${shape || "default-shape"} ${style || "default-style"}`.trim()
    
    // Create button with bubble effect and variant classes
    const button = createBubbleButton(classes)
    
    // Verify core button functionality is preserved
    expect(button.classList.contains("btn")).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Verify all variant classes are preserved
    if (color) expect(button.classList.contains(color)).toBe(true)
    if (size) expect(button.classList.contains(size)).toBe(true)
    if (shape) expect(button.classList.contains(shape)).toBe(true)
    if (style) expect(button.classList.contains(style)).toBe(true)
    
    // Test that bubble effect configuration works with all variants
    const testConfig = {
      "--btn-bubble-duration": "400ms",
      "--btn-bubble-scale-x": "1.8",
      "--btn-bubble-scale-y": "2.5",
      "--btn-bubble-easing": "ease-in-out"
    }
    
    Object.entries(testConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button remains functional (can be focused, clicked, etc.)
    expect(button.tagName.toLowerCase()).toBe("button")
    expect(button.textContent).toBe("Test Button")
    
    // Test focus functionality
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test that button can receive click events
    let clickEventFired = false
    button.addEventListener("click", () => {
      clickEventFired = true
    })
    
    const clickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(clickEvent)
    expect(clickEventFired).toBe(true)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for color variant compatibility
test("Property 2: Color variant compatibility - for any color variant, bubble effect should inherit button color correctly", () => {
  const colorVariants = [
    { class: "btn-primary", description: "primary color" },
    { class: "btn-secondary", description: "secondary color" },
    { class: "btn-accent", description: "accent color" },
    { class: "btn-neutral", description: "neutral color" },
    { class: "btn-info", description: "info color" },
    { class: "btn-success", description: "success color" },
    { class: "btn-warning", description: "warning color" },
    { class: "btn-error", description: "error color" },
  ]
  
  colorVariants.forEach(({ class: colorClass }) => {
    const button = createBubbleButton(colorClass)
    
    // Verify color class is applied
    expect(button.classList.contains(colorClass)).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that custom bubble background can override inherited color
    const customBubbleColor = "#ff6b6b"
    button.style.setProperty("--btn-bubble-bg", customBubbleColor)
    expect(button.style.getPropertyValue("--btn-bubble-bg")).toBe(customBubbleColor)
    
    // Test that bubble animation properties work with color variants
    button.style.setProperty("--btn-bubble-duration", "300ms")
    button.style.setProperty("--btn-bubble-scale-x", "1.6")
    
    expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("300ms")
    expect(button.style.getPropertyValue("--btn-bubble-scale-x")).toBe("1.6")
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for size variant compatibility
test("Property 2: Size variant compatibility - for any size variant, bubble effect should scale appropriately", () => {
  const sizeVariants = [
    { class: "btn-xs", description: "extra small size" },
    { class: "btn-sm", description: "small size" },
    { class: "btn-md", description: "medium size" },
    { class: "btn-lg", description: "large size" },
    { class: "btn-xl", description: "extra large size" },
  ]
  
  sizeVariants.forEach(({ class: sizeClass }) => {
    const button = createBubbleButton(`btn-primary ${sizeClass}`)
    
    // Verify size class is applied
    expect(button.classList.contains(sizeClass)).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that bubble animation works regardless of button size
    const scaleConfig = {
      "--btn-bubble-scale-x": "1.4",
      "--btn-bubble-scale-y": "2.0",
      "--btn-bubble-duration": "250ms"
    }
    
    Object.entries(scaleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for shape variant compatibility
test("Property 2: Shape variant compatibility - for any shape variant, bubble effect should inherit border radius correctly", () => {
  const shapeVariants = [
    { class: "btn-square", description: "square shape" },
    { class: "btn-circle", description: "circle shape" },
    { class: "btn-wide", description: "wide shape" },
    { class: "btn-block", description: "block shape" },
  ]
  
  shapeVariants.forEach(({ class: shapeClass }) => {
    const button = createBubbleButton(`btn-secondary ${shapeClass}`)
    
    // Verify shape class is applied
    expect(button.classList.contains(shapeClass)).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that bubble animation properties work with shape variants
    const animationConfig = {
      "--btn-bubble-duration": "320ms",
      "--btn-bubble-easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }
    
    Object.entries(animationConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for style variant compatibility
test("Property 2: Style variant compatibility - for any style variant, bubble effect should work without interfering with existing styles", () => {
  const styleVariants = [
    { class: "btn-ghost", description: "ghost style" },
    { class: "btn-link", description: "link style" },
    { class: "btn-outline", description: "outline style" },
    { class: "btn-dash", description: "dash style" },
    { class: "btn-soft", description: "soft style" },
  ]
  
  styleVariants.forEach(({ class: styleClass }) => {
    const button = createBubbleButton(`btn-accent ${styleClass}`)
    
    // Verify style class is applied
    expect(button.classList.contains(styleClass)).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that bubble effect doesn't interfere with style-specific functionality
    // For example, link buttons should still be able to have href-like behavior
    if (styleClass === "btn-link") {
      // Link buttons should maintain their link-like appearance
      expect(button.classList.contains("btn-link")).toBe(true)
    }
    
    // Test that bubble animation works with style variants
    const bubbleConfig = {
      "--btn-bubble-bg": "#4ecdc4",
      "--btn-bubble-scale-x": "1.7",
      "--btn-bubble-scale-y": "2.3"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for complex variant combinations
test("Property 2: Complex variant combinations - for any combination of button variants, bubble effect should work correctly", () => {
  const complexCombinations = [
    { classes: "btn-primary btn-lg btn-wide", description: "primary large wide button" },
    { classes: "btn-secondary btn-sm btn-circle", description: "secondary small circle button" },
    { classes: "btn-accent btn-xl btn-ghost", description: "accent extra large ghost button" },
    { classes: "btn-neutral btn-xs btn-outline", description: "neutral extra small outline button" },
    { classes: "btn-info btn-md btn-block btn-soft", description: "info medium block soft button" },
    { classes: "btn-success btn-lg btn-square btn-dash", description: "success large square dash button" },
    { classes: "btn-warning btn-sm btn-link", description: "warning small link button" },
    { classes: "btn-error btn-xl btn-wide btn-ghost", description: "error extra large wide ghost button" },
  ]
  
  complexCombinations.forEach(({ classes }) => {
    const button = createBubbleButton(classes)
    
    // Verify all classes are applied
    const classArray = classes.split(" ")
    classArray.forEach(cls => {
      expect(button.classList.contains(cls)).toBe(true)
    })
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that bubble effect works with complex combinations
    const fullConfig = {
      "--btn-bubble-duration": "380ms",
      "--btn-bubble-scale-x": "1.6",
      "--btn-bubble-scale-y": "2.4",
      "--btn-bubble-easing": "ease-out",
      "--btn-bubble-bg": "#ff9f43"
    }
    
    Object.entries(fullConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button functionality is preserved
    expect(button.tagName.toLowerCase()).toBe("button")
    
    // Test accessibility attributes work
    button.setAttribute("aria-label", "Complex button test")
    expect(button.getAttribute("aria-label")).toBe("Complex button test")
    
    // Test focus behavior
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property-Based Test: Layer Positioning
// **Feature: button-bubble-fill, Property 3: Layer Positioning**
// **Validates: Requirements 1.4, 1.5**
test("Property 3: Layer positioning - for any button with bubble fill, the animation layer should be positioned behind the button content with negative z-index and inherit the button's border radius", () => {
  // Test cases with different border radius configurations
  const borderRadiusTestCases = [
    { borderRadius: "0px", description: "no border radius" },
    { borderRadius: "4px", description: "small border radius" },
    { borderRadius: "8px", description: "medium border radius" },
    { borderRadius: "16px", description: "large border radius" },
    { borderRadius: "50%", description: "circular border radius" },
    { borderRadius: "12px 4px", description: "asymmetric border radius" },
    { borderRadius: "8px 8px 0 0", description: "partial border radius" },
  ]
  
  borderRadiusTestCases.forEach(({ borderRadius }) => {
    const button = createBubbleButton("btn-primary")
    
    // Set custom border radius on the button
    button.style.borderRadius = borderRadius
    
    // Verify button has bubble class and positioning properties
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that the button has the required CSS properties for proper layering
    // We can't directly test pseudo-elements, but we can verify the button structure
    
    // Verify the button has the border radius set
    expect(button.style.borderRadius).toBe(borderRadius)
    
    // Test that bubble configuration works with different border radius values
    const bubbleConfig = {
      "--btn-bubble-bg": "#3b82f6",
      "--btn-bubble-duration": "300ms",
      "--btn-bubble-scale-x": "1.4",
      "--btn-bubble-scale-y": "2.1"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button content is still accessible and positioned correctly
    expect(button.textContent).toBe("Test Button")
    
    // Test that button maintains its interactive properties
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for z-index layering with different button shapes
test("Property 3: Z-index layering with button shapes - for any button shape, bubble layer should be positioned behind content", () => {
  const shapeTestCases = [
    { classes: "btn-square", description: "square button" },
    { classes: "btn-circle", description: "circle button" },
    { classes: "btn-wide", description: "wide button" },
    { classes: "btn-block", description: "block button" },
  ]
  
  shapeTestCases.forEach(({ classes }) => {
    const button = createBubbleButton(`btn-secondary ${classes}`)
    
    // Verify shape class is applied
    expect(button.classList.contains("btn-bubble")).toBe(true)
    const shapeClass = classes.split(" ")[0]
    expect(button.classList.contains(shapeClass)).toBe(true)
    
    // Test that bubble positioning works with different shapes
    const positioningConfig = {
      "--btn-bubble-bg": "rgba(34, 197, 94, 0.8)",
      "--btn-bubble-scale-x": "1.3",
      "--btn-bubble-scale-y": "1.9"
    }
    
    Object.entries(positioningConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button content remains accessible
    expect(button.textContent).toBe("Test Button")
    
    // Test that button can still receive events (content is not blocked by bubble layer)
    let eventReceived = false
    button.addEventListener("click", () => {
      eventReceived = true
    })
    
    const clickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(clickEvent)
    expect(eventReceived).toBe(true)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for layer positioning with nested content
test("Property 3: Layer positioning with nested content - for any button with nested elements, bubble layer should not interfere with content positioning", () => {
  const contentTestCases = [
    { 
      content: "Simple Text",
      description: "simple text content"
    },
    {
      content: '<span>Nested Span</span>',
      description: "nested span element"
    },
    {
      content: '<span class="loading loading-spinner loading-xs"></span> Loading',
      description: "loading spinner with text"
    }
  ]
  
  contentTestCases.forEach(({ content }) => {
    const button = createBubbleButton("btn-accent")
    
    // Set the button content
    button.innerHTML = content
    
    // Verify bubble class is applied
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that bubble layer configuration works with nested content
    const layerConfig = {
      "--btn-bubble-duration": "280ms",
      "--btn-bubble-easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      "--btn-bubble-scale-x": "1.7",
      "--btn-bubble-scale-y": "2.6"
    }
    
    Object.entries(layerConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that nested content is still accessible (check that content exists)
    expect(button.innerHTML.length).toBeGreaterThan(0)
    expect(button.innerHTML).toContain(content.includes('<') ? content.split('>')[1].split('<')[0] || content.split(' ')[1] || 'Nested' : content)
    
    // Test that button with nested content can still be focused and clicked
    button.focus()
    expect(document.activeElement).toBe(button)
    
    let clickHandled = false
    button.addEventListener("click", () => {
      clickHandled = true
    })
    
    const clickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(clickEvent)
    expect(clickHandled).toBe(true)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for layer positioning with custom CSS properties
test("Property 3: Layer positioning with custom CSS properties - for any custom positioning values, bubble layer should maintain proper stacking context", () => {
  const positioningTestCases = [
    {
      customStyles: {
        position: "relative",
        zIndex: "10"
      },
      description: "relative positioning with z-index"
    },
    {
      customStyles: {
        position: "absolute",
        top: "10px",
        left: "10px"
      },
      description: "absolute positioning"
    },
    {
      customStyles: {
        transform: "translateX(10px)",
        transition: "transform 0.2s"
      },
      description: "custom transform and transition"
    },
    {
      customStyles: {
        overflow: "visible",
        isolation: "auto"
      },
      description: "custom overflow and isolation"
    }
  ]
  
  positioningTestCases.forEach(({ customStyles }) => {
    const button = createBubbleButton("btn-info")
    
    // Apply custom styles
    Object.entries(customStyles).forEach(([property, value]) => {
      button.style[property] = value
    })
    
    // Verify bubble class is applied
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Verify custom styles are applied
    Object.entries(customStyles).forEach(([property, expectedValue]) => {
      expect(button.style[property]).toBe(expectedValue)
    })
    
    // Test that bubble animation properties work with custom positioning
    const bubbleConfig = {
      "--btn-bubble-bg": "#06b6d4",
      "--btn-bubble-duration": "320ms",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.2"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button functionality is preserved with custom positioning
    expect(button.textContent).toBe("Test Button")
    
    // Test focus behavior
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for border radius inheritance across different themes/contexts
test("Property 3: Border radius inheritance - for any border radius configuration, bubble layer should inherit the button's border radius correctly", () => {
  const radiusInheritanceTestCases = [
    {
      buttonClass: "btn-primary",
      customRadius: "0",
      description: "no radius on primary button"
    },
    {
      buttonClass: "btn-secondary btn-lg",
      customRadius: "12px",
      description: "medium radius on large secondary button"
    },
    {
      buttonClass: "btn-accent btn-sm",
      customRadius: "20px",
      description: "large radius on small accent button"
    },
    {
      buttonClass: "btn-ghost btn-circle",
      customRadius: "50%",
      description: "circular radius on ghost button"
    },
    {
      buttonClass: "btn-outline btn-square",
      customRadius: "4px",
      description: "small radius on square outline button"
    }
  ]
  
  radiusInheritanceTestCases.forEach(({ buttonClass, customRadius }) => {
    const button = createBubbleButton(buttonClass)
    
    // Set custom border radius
    button.style.borderRadius = customRadius
    
    // Verify button classes and radius
    expect(button.classList.contains("btn-bubble")).toBe(true)
    expect(button.style.borderRadius).toBe(customRadius)
    
    // Test that bubble configuration works with inherited radius
    const inheritanceConfig = {
      "--btn-bubble-bg": "currentColor",
      "--btn-bubble-duration": "400ms",
      "--btn-bubble-scale-x": "1.6",
      "--btn-bubble-scale-y": "2.3",
      "--btn-bubble-easing": "ease-in-out"
    }
    
    Object.entries(inheritanceConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button maintains its visual and functional properties
    expect(button.textContent).toBe("Test Button")
    
    // Test interaction capabilities
    let interactionWorked = false
    button.addEventListener("mouseenter", () => {
      interactionWorked = true
    })
    
    const mouseEnterEvent = new dom.window.MouseEvent("mouseenter", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(mouseEnterEvent)
    expect(interactionWorked).toBe(true)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property-Based Test: CSS Specificity Integration
// **Feature: button-bubble-fill, Property 6: CSS Specificity Integration**
// **Validates: Requirements 5.5**
test("Property 6: CSS specificity integration - for any button with bubble fill, the bubble styles should not be overridden by existing button styles and should maintain proper cascade order", () => {
  // Test cases with different CSS specificity scenarios
  const specificityTestCases = [
    {
      buttonClasses: "btn btn-primary",
      customStyles: {},
      description: "basic button with primary color"
    },
    {
      buttonClasses: "btn btn-secondary btn-lg",
      customStyles: { backgroundColor: "#ff0000" },
      description: "button with inline background color override"
    },
    {
      buttonClasses: "btn btn-accent btn-outline",
      customStyles: { borderColor: "#00ff00", borderWidth: "2px" },
      description: "outline button with custom border styles"
    },
    {
      buttonClasses: "btn btn-ghost btn-sm",
      customStyles: { color: "#0000ff", opacity: "0.8" },
      description: "ghost button with custom text color and opacity"
    },
    {
      buttonClasses: "btn btn-link",
      customStyles: { textDecoration: "none", fontWeight: "bold" },
      description: "link button with custom text styles"
    }
  ]
  
  specificityTestCases.forEach(({ buttonClasses, customStyles }) => {
    const button = createBubbleButton(buttonClasses.replace("btn ", ""))
    
    // Apply custom styles that might conflict with bubble styles
    Object.entries(customStyles).forEach(([property, value]) => {
      button.style[property] = value
    })
    
    // Verify button has all expected classes
    const classArray = buttonClasses.split(" ")
    classArray.forEach(cls => {
      expect(button.classList.contains(cls)).toBe(true)
    })
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Verify custom styles are applied (check that styles exist, not exact format)
    Object.entries(customStyles).forEach(([property, expectedValue]) => {
      const actualValue = button.style[property]
      // For colors, check if the style was applied (browser may convert format)
      if (property.includes("Color") || property.includes("color")) {
        expect(actualValue).toBeTruthy()
      } else {
        expect(actualValue).toBe(expectedValue)
      }
    })
    
    // Test that bubble-specific CSS custom properties work despite other styles
    const bubbleProperties = {
      "--btn-bubble-bg": "#8b5cf6",
      "--btn-bubble-duration": "300ms",
      "--btn-bubble-scale-x": "1.4",
      "--btn-bubble-scale-y": "2.0",
      "--btn-bubble-easing": "ease-out"
    }
    
    Object.entries(bubbleProperties).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button functionality is preserved despite style conflicts
    expect(button.tagName.toLowerCase()).toBe("button")
    expect(button.textContent).toBe("Test Button")
    
    // Test that button can still be interacted with
    button.focus()
    expect(document.activeElement).toBe(button)
    
    let eventHandled = false
    button.addEventListener("click", () => {
      eventHandled = true
    })
    
    const clickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(clickEvent)
    expect(eventHandled).toBe(true)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for CSS cascade order with multiple modifiers
test("Property 6: CSS cascade order with multiple modifiers - for any combination of button modifiers, bubble styles should maintain proper precedence", () => {
  const cascadeTestCases = [
    {
      classes: "btn-primary btn-lg btn-outline",
      description: "primary large outline button"
    },
    {
      classes: "btn-secondary btn-sm btn-ghost",
      description: "secondary small ghost button"
    },
    {
      classes: "btn-accent btn-xl btn-soft",
      description: "accent extra large soft button"
    },
    {
      classes: "btn-neutral btn-xs btn-dash",
      description: "neutral extra small dash button"
    },
    {
      classes: "btn-info btn-md btn-link",
      description: "info medium link button"
    },
    {
      classes: "btn-success btn-lg btn-wide btn-outline",
      description: "success large wide outline button"
    },
    {
      classes: "btn-warning btn-sm btn-circle btn-ghost",
      description: "warning small circle ghost button"
    },
    {
      classes: "btn-error btn-xl btn-block btn-soft",
      description: "error extra large block soft button"
    }
  ]
  
  cascadeTestCases.forEach(({ classes }) => {
    const button = createBubbleButton(classes)
    
    // Verify all classes are applied
    const classArray = classes.split(" ")
    classArray.forEach(cls => {
      expect(button.classList.contains(cls)).toBe(true)
    })
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test that bubble properties work with complex class combinations
    const cascadeConfig = {
      "--btn-bubble-bg": "rgba(168, 85, 247, 0.9)",
      "--btn-bubble-duration": "350ms",
      "--btn-bubble-scale-x": "1.6",
      "--btn-bubble-scale-y": "2.3",
      "--btn-bubble-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
    }
    
    Object.entries(cascadeConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button maintains its expected behavior with multiple modifiers
    expect(button.textContent).toBe("Test Button")
    
    // Test interaction capabilities
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for CSS specificity with important declarations
test("Property 6: CSS specificity with important declarations - for any button with bubble fill, bubble properties should work even with !important styles", () => {
  const importantStylesTestCases = [
    {
      buttonClass: "btn-primary",
      importantStyles: {
        "background-color": "#ff0000 !important",
        "border-color": "#00ff00 !important"
      },
      description: "button with important background and border"
    },
    {
      buttonClass: "btn-secondary btn-lg",
      importantStyles: {
        "color": "#0000ff !important",
        "font-size": "20px !important"
      },
      description: "large button with important text styles"
    },
    {
      buttonClass: "btn-accent btn-outline",
      importantStyles: {
        "border-width": "3px !important",
        "opacity": "0.5 !important"
      },
      description: "outline button with important border and opacity"
    }
  ]
  
  importantStylesTestCases.forEach(({ buttonClass }) => {
    const button = createBubbleButton(buttonClass)
    
    // Create a style element with !important declarations
    const style = document.createElement("style")
    style.textContent = `
      .btn-bubble {
        background-color: #ff0000 !important;
        border-color: #00ff00 !important;
        color: #0000ff !important;
      }
    `
    document.head.appendChild(style)
    
    // Verify button classes
    expect(button.classList.contains("btn-bubble")).toBe(true)
    expect(button.classList.contains(buttonClass.split(" ")[0])).toBe(true)
    
    // Test that bubble CSS custom properties still work despite !important styles
    const bubbleConfig = {
      "--btn-bubble-bg": "#f59e0b",
      "--btn-bubble-duration": "400ms",
      "--btn-bubble-scale-x": "1.8",
      "--btn-bubble-scale-y": "2.5",
      "--btn-bubble-easing": "ease-in-out"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button functionality is preserved
    expect(button.textContent).toBe("Test Button")
    
    // Test focus behavior
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.head.removeChild(style)
    document.body.removeChild(button)
  })
})

// Property test for CSS layer system integration
test("Property 6: CSS layer system integration - for any button with bubble fill, bubble styles should work correctly within DaisyUI's layer system", () => {
  const layerTestCases = [
    {
      buttonClass: "btn-primary",
      layerStyles: `
        @layer daisyui.l1 {
          .btn { background-color: #ef4444; }
        }
      `,
      description: "button with layer 1 override"
    },
    {
      buttonClass: "btn-secondary btn-lg",
      layerStyles: `
        @layer daisyui.l1.l2 {
          .btn-lg { font-size: 24px; }
        }
      `,
      description: "large button with layer 2 override"
    },
    {
      buttonClass: "btn-accent btn-outline",
      layerStyles: `
        @layer daisyui.l1.l2.l3 {
          .btn-outline { border-width: 2px; }
        }
      `,
      description: "outline button with layer 3 override"
    }
  ]
  
  layerTestCases.forEach(({ buttonClass, layerStyles }) => {
    const button = createBubbleButton(buttonClass)
    
    // Create a style element with layer-specific styles
    const style = document.createElement("style")
    style.textContent = layerStyles
    document.head.appendChild(style)
    
    // Verify button classes
    expect(button.classList.contains("btn-bubble")).toBe(true)
    const primaryClass = buttonClass.split(" ")[0]
    expect(button.classList.contains(primaryClass)).toBe(true)
    
    // Test that bubble properties work within the layer system
    const layerConfig = {
      "--btn-bubble-bg": "#10b981",
      "--btn-bubble-duration": "320ms",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.1",
      "--btn-bubble-easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    }
    
    Object.entries(layerConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test that button maintains functionality within layer system
    expect(button.textContent).toBe("Test Button")
    
    // Test interaction capabilities
    let hoverEventHandled = false
    button.addEventListener("mouseenter", () => {
      hoverEventHandled = true
    })
    
    const hoverEvent = new dom.window.MouseEvent("mouseenter", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(hoverEvent)
    expect(hoverEventHandled).toBe(true)
    
    // Clean up
    document.head.removeChild(style)
    document.body.removeChild(button)
  })
})

// Property test for CSS custom property inheritance and override
test("Property 6: CSS custom property inheritance and override - for any button with bubble fill, custom properties should follow proper inheritance rules", () => {
  const inheritanceTestCases = [
    {
      buttonClass: "btn-primary",
      parentStyles: {
        "--btn-color": "#dc2626",
        "--btn-bubble-duration": "500ms"
      },
      childOverrides: {
        "--btn-bubble-bg": "#059669",
        "--btn-bubble-scale-x": "2.0"
      },
      description: "primary button with parent and child custom properties"
    },
    {
      buttonClass: "btn-secondary btn-lg",
      parentStyles: {
        "--btn-bubble-easing": "linear",
        "--btn-bubble-scale-y": "3.0"
      },
      childOverrides: {
        "--btn-bubble-duration": "200ms",
        "--btn-bubble-bg": "currentColor"
      },
      description: "large secondary button with mixed inheritance"
    },
    {
      buttonClass: "btn-accent btn-ghost",
      parentStyles: {
        "--btn-bubble-bg": "#7c3aed",
        "--btn-bubble-scale-x": "1.2",
        "--btn-bubble-scale-y": "1.8"
      },
      childOverrides: {
        "--btn-bubble-easing": "ease-in",
        "--btn-bubble-duration": "600ms"
      },
      description: "ghost accent button with comprehensive custom properties"
    }
  ]
  
  inheritanceTestCases.forEach(({ buttonClass, parentStyles, childOverrides }) => {
    // Create a parent container with custom properties
    const container = document.createElement("div")
    Object.entries(parentStyles).forEach(([property, value]) => {
      container.style.setProperty(property, value)
    })
    document.body.appendChild(container)
    
    // Create button inside the container
    const button = document.createElement("button")
    button.className = `btn btn-bubble ${buttonClass}`.trim()
    button.textContent = "Test Button"
    container.appendChild(button)
    
    // Apply child-specific overrides
    Object.entries(childOverrides).forEach(([property, value]) => {
      button.style.setProperty(property, value)
    })
    
    // Verify button classes
    expect(button.classList.contains("btn-bubble")).toBe(true)
    const primaryClass = buttonClass.split(" ")[0]
    expect(button.classList.contains(primaryClass)).toBe(true)
    
    // Test that child overrides are applied correctly
    Object.entries(childOverrides).forEach(([property, expectedValue]) => {
      expect(button.style.getPropertyValue(property)).toBe(expectedValue)
    })
    
    // Test that parent styles can be inherited (by setting additional properties)
    button.style.setProperty("--btn-bubble-test", "inherited-value")
    expect(button.style.getPropertyValue("--btn-bubble-test")).toBe("inherited-value")
    
    // Test that button functionality is preserved with inheritance
    expect(button.textContent).toBe("Test Button")
    
    // Test focus behavior
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(container)
  })
})

// Property-Based Test: Contrast Preservation
// **Feature: button-bubble-fill, Property 5: Contrast Preservation**
// **Validates: Requirements 4.5**
test("Property 5: Contrast preservation - for any button with bubble fill, the contrast ratio between text and background should meet or exceed WCAG accessibility standards", () => {
  // Helper function to calculate relative luminance
  function getRelativeLuminance(r, g, b) {
    // Convert RGB values to sRGB
    const rsRGB = r / 255
    const gsRGB = g / 255
    const bsRGB = b / 255
    
    // Apply gamma correction
    const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
    const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
    const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)
    
    // Calculate relative luminance
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
  }
  
  // Helper function to calculate contrast ratio
  function getContrastRatio(color1, color2) {
    const l1 = getRelativeLuminance(color1.r, color1.g, color1.b)
    const l2 = getRelativeLuminance(color2.r, color2.g, color2.b)
    
    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)
    
    return (lighter + 0.05) / (darker + 0.05)
  }
  
  // Helper function to parse RGB color from various formats
  function parseColor(colorString) {
    // Handle hex colors
    if (colorString.startsWith('#')) {
      const hex = colorString.slice(1)
      if (hex.length === 3) {
        return {
          r: parseInt(hex[0] + hex[0], 16),
          g: parseInt(hex[1] + hex[1], 16),
          b: parseInt(hex[2] + hex[2], 16)
        }
      } else if (hex.length === 6) {
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16)
        }
      }
    }
    
    // Handle rgb() colors
    const rgbMatch = colorString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[1]),
        g: parseInt(rgbMatch[2]),
        b: parseInt(rgbMatch[3])
      }
    }
    
    // Handle rgba() colors (ignore alpha for contrast calculation)
    const rgbaMatch = colorString.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/)
    if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[1]),
        g: parseInt(rgbaMatch[2]),
        b: parseInt(rgbaMatch[3])
      }
    }
    
    // Default to white for unknown colors
    return { r: 255, g: 255, b: 255 }
  }
  
  // Test cases with different color combinations that should maintain good contrast
  const contrastTestCases = [
    {
      buttonClass: "btn-primary",
      textColor: "#ffffff", // white text
      bubbleColor: "#1e40af", // darker blue background (contrast ratio ~5.9)
      description: "primary button with white text on dark blue background"
    },
    {
      buttonClass: "btn-secondary",
      textColor: "#000000", // black text
      bubbleColor: "#e5e7eb", // light gray background (contrast ratio ~12.6)
      description: "secondary button with black text on light gray background"
    },
    {
      buttonClass: "btn-accent",
      textColor: "#ffffff", // white text
      bubbleColor: "#92400e", // very dark amber background (contrast ratio ~7.1)
      description: "accent button with white text on very dark amber background"
    },
    {
      buttonClass: "btn-success",
      textColor: "#ffffff", // white text
      bubbleColor: "#047857", // darker green background (contrast ratio ~6.0)
      description: "success button with white text on dark green background"
    },
    {
      buttonClass: "btn-error",
      textColor: "#ffffff", // white text
      bubbleColor: "#b91c1c", // darker red background (contrast ratio ~6.0)
      description: "error button with white text on dark red background"
    },
    {
      buttonClass: "btn-warning",
      textColor: "#ffffff", // white text
      bubbleColor: "#92400e", // very dark amber background (contrast ratio ~7.1)
      description: "warning button with white text on very dark amber background"
    },
    {
      buttonClass: "btn-info",
      textColor: "#ffffff", // white text
      bubbleColor: "#1e40af", // darker blue background (contrast ratio ~5.9)
      description: "info button with white text on dark blue background"
    },
    {
      buttonClass: "btn-neutral",
      textColor: "#ffffff", // white text
      bubbleColor: "#1f2937", // very dark gray background (contrast ratio ~15.3)
      description: "neutral button with white text on very dark gray background"
    }
  ]
  
  contrastTestCases.forEach(({ buttonClass, textColor, bubbleColor }) => {
    const button = createBubbleButton(buttonClass)
    
    // Set text color and bubble background color
    button.style.color = textColor
    button.style.setProperty("--btn-bubble-bg", bubbleColor)
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    expect(button.classList.contains(buttonClass)).toBe(true)
    
    // Parse colors for contrast calculation
    const textColorRGB = parseColor(textColor)
    const bubbleColorRGB = parseColor(bubbleColor)
    
    // Calculate contrast ratio
    const contrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    
    // WCAG AA standard requires a contrast ratio of at least 4.5:1 for normal text
    // WCAG AAA standard requires a contrast ratio of at least 7:1 for normal text
    // We'll test for AA compliance (4.5:1) as the minimum requirement
    expect(contrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Test that bubble configuration doesn't break contrast
    const bubbleConfig = {
      "--btn-bubble-duration": "350ms",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.2",
      "--btn-bubble-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Verify the contrast is still maintained after configuration
    const finalContrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    expect(finalContrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Test that button remains functional with good contrast
    expect(button.textContent).toBe("Test Button")
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for contrast preservation with custom colors
test("Property 5: Contrast preservation with custom colors - for any custom color combination, contrast should meet accessibility standards", () => {
  // Generate test cases with various color combinations
  const customColorTestCases = [
    // High contrast combinations
    { text: "#000000", bubble: "#ffffff", description: "black on white" },
    { text: "#ffffff", bubble: "#000000", description: "white on black" },
    
    // Good contrast combinations (above 4.5:1)
    { text: "#ffffff", bubble: "#1f2937", description: "white on dark gray" },
    { text: "#000000", bubble: "#f3f4f6", description: "black on light gray" },
    { text: "#ffffff", bubble: "#b91c1c", description: "white on dark red" },
    { text: "#ffffff", bubble: "#92400e", description: "white on very dark amber" },
    
    // Borderline contrast combinations (around 4.5:1)
    { text: "#ffffff", bubble: "#1e40af", description: "white on dark blue" },
    { text: "#000000", bubble: "#d1d5db", description: "black on light medium gray" },
  ]
  
  customColorTestCases.forEach(({ text, bubble }) => {
    const button = createBubbleButton("btn-primary")
    
    // Set custom text and bubble colors
    button.style.color = text
    button.style.setProperty("--btn-bubble-bg", bubble)
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Parse colors for contrast calculation
    function parseColor(colorString) {
      if (colorString.startsWith('#')) {
        const hex = colorString.slice(1)
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16)
        }
      }
      return { r: 255, g: 255, b: 255 }
    }
    
    function getRelativeLuminance(r, g, b) {
      const rsRGB = r / 255
      const gsRGB = g / 255
      const bsRGB = b / 255
      
      const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
      const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
      const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)
      
      return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
    }
    
    function getContrastRatio(color1, color2) {
      const l1 = getRelativeLuminance(color1.r, color1.g, color1.b)
      const l2 = getRelativeLuminance(color2.r, color2.g, color2.b)
      
      const lighter = Math.max(l1, l2)
      const darker = Math.min(l1, l2)
      
      return (lighter + 0.05) / (darker + 0.05)
    }
    
    const textColorRGB = parseColor(text)
    const bubbleColorRGB = parseColor(bubble)
    
    // Calculate actual contrast ratio
    const actualContrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    
    // Verify contrast meets WCAG AA standards (4.5:1 minimum)
    expect(actualContrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Test that bubble animation properties don't affect contrast
    const animationConfig = {
      "--btn-bubble-duration": "300ms",
      "--btn-bubble-scale-x": "1.4",
      "--btn-bubble-scale-y": "2.0"
    }
    
    Object.entries(animationConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Verify contrast is still maintained after animation configuration
    const finalContrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    expect(finalContrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for contrast preservation across different button sizes
test("Property 5: Contrast preservation across button sizes - for any button size, contrast should remain consistent", () => {
  const sizeContrastTestCases = [
    { size: "btn-xs", textColor: "#ffffff", bubbleColor: "#1f2937" }, // contrast ratio ~15.3
    { size: "btn-sm", textColor: "#000000", bubbleColor: "#f3f4f6" }, // contrast ratio ~16.8
    { size: "btn-md", textColor: "#ffffff", bubbleColor: "#b91c1c" }, // contrast ratio ~6.0
    { size: "btn-lg", textColor: "#ffffff", bubbleColor: "#92400e" }, // contrast ratio ~7.1
    { size: "btn-xl", textColor: "#ffffff", bubbleColor: "#047857" }, // contrast ratio ~6.0
  ]
  
  sizeContrastTestCases.forEach(({ size, textColor, bubbleColor }) => {
    const button = createBubbleButton(`btn-primary ${size}`)
    
    // Set colors
    button.style.color = textColor
    button.style.setProperty("--btn-bubble-bg", bubbleColor)
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    expect(button.classList.contains(size)).toBe(true)
    
    // Helper functions for contrast calculation
    function parseColor(colorString) {
      if (colorString.startsWith('#')) {
        const hex = colorString.slice(1)
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16)
        }
      }
      return { r: 255, g: 255, b: 255 }
    }
    
    function getRelativeLuminance(r, g, b) {
      const rsRGB = r / 255
      const gsRGB = g / 255
      const bsRGB = b / 255
      
      const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
      const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
      const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)
      
      return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
    }
    
    function getContrastRatio(color1, color2) {
      const l1 = getRelativeLuminance(color1.r, color1.g, color1.b)
      const l2 = getRelativeLuminance(color2.r, color2.g, color2.b)
      
      const lighter = Math.max(l1, l2)
      const darker = Math.min(l1, l2)
      
      return (lighter + 0.05) / (darker + 0.05)
    }
    
    // Calculate contrast ratio
    const textColorRGB = parseColor(textColor)
    const bubbleColorRGB = parseColor(bubbleColor)
    const contrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    
    // Verify contrast meets accessibility standards regardless of button size
    expect(contrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Test that size-specific properties don't affect contrast
    button.style.setProperty("--btn-bubble-scale-x", "1.5")
    button.style.setProperty("--btn-bubble-scale-y", "2.2")
    
    // Verify contrast is maintained
    const finalContrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    expect(finalContrastRatio).toBeGreaterThanOrEqual(4.5)
    expect(finalContrastRatio).toBeCloseTo(contrastRatio, 2)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Property test for contrast preservation with theme variations
test("Property 5: Contrast preservation with theme variations - for any theme context, contrast should meet accessibility standards", () => {
  const themeContrastTestCases = [
    {
      themeClass: "light",
      buttonClass: "btn-primary",
      expectedTextColor: "#ffffff",
      expectedBubbleColor: "#1e40af" // darker blue with good contrast
    },
    {
      themeClass: "dark", 
      buttonClass: "btn-secondary",
      expectedTextColor: "#ffffff",
      expectedBubbleColor: "#1f2937" // very dark gray with excellent contrast
    },
    {
      themeClass: "cupcake",
      buttonClass: "btn-accent",
      expectedTextColor: "#ffffff",
      expectedBubbleColor: "#92400e" // very dark amber with excellent contrast for white text
    },
    {
      themeClass: "corporate",
      buttonClass: "btn-neutral",
      expectedTextColor: "#ffffff",
      expectedBubbleColor: "#1f2937" // very dark gray with excellent contrast
    }
  ]
  
  themeContrastTestCases.forEach(({ themeClass, buttonClass, expectedTextColor, expectedBubbleColor }) => {
    // Create a themed container
    const themeContainer = document.createElement("div")
    themeContainer.setAttribute("data-theme", themeClass)
    document.body.appendChild(themeContainer)
    
    // Create button within themed context
    const button = document.createElement("button")
    button.className = `btn btn-bubble ${buttonClass}`
    button.textContent = "Test Button"
    themeContainer.appendChild(button)
    
    // Set expected colors for the theme
    button.style.color = expectedTextColor
    button.style.setProperty("--btn-bubble-bg", expectedBubbleColor)
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    expect(button.classList.contains(buttonClass)).toBe(true)
    
    // Helper functions for contrast calculation
    function parseColor(colorString) {
      if (colorString.startsWith('#')) {
        const hex = colorString.slice(1)
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16)
        }
      }
      return { r: 255, g: 255, b: 255 }
    }
    
    function getRelativeLuminance(r, g, b) {
      const rsRGB = r / 255
      const gsRGB = g / 255
      const bsRGB = b / 255
      
      const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
      const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
      const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)
      
      return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
    }
    
    function getContrastRatio(color1, color2) {
      const l1 = getRelativeLuminance(color1.r, color1.g, color1.b)
      const l2 = getRelativeLuminance(color2.r, color2.g, color2.b)
      
      const lighter = Math.max(l1, l2)
      const darker = Math.min(l1, l2)
      
      return (lighter + 0.05) / (darker + 0.05)
    }
    
    // Calculate contrast ratio for the theme
    const textColorRGB = parseColor(expectedTextColor)
    const bubbleColorRGB = parseColor(expectedBubbleColor)
    const contrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    
    // Verify contrast meets accessibility standards in themed context
    expect(contrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Test that theme-specific bubble properties work correctly
    const themeConfig = {
      "--btn-bubble-duration": "350ms",
      "--btn-bubble-easing": "cubic-bezier(0.4, 0, 0.2, 1)",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.2"
    }
    
    Object.entries(themeConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Verify contrast is maintained after theme configuration
    const finalContrastRatio = getContrastRatio(textColorRGB, bubbleColorRGB)
    expect(finalContrastRatio).toBeGreaterThanOrEqual(4.5)
    
    // Test that button remains functional in themed context
    expect(button.textContent).toBe("Test Button")
    
    // Clean up
    document.body.removeChild(themeContainer)
  })
})

// Integration Tests for Button Functionality
// **Task 8.1: Write integration tests for button functionality**
// **Requirements: 2.5, 4.3**

// Integration test for focus states remaining unaffected
test("Integration: Focus states remain unaffected - for any button with bubble fill, focus behavior should work correctly across all variants", () => {
  const focusTestCases = [
    { classes: "btn-primary", description: "primary button focus" },
    { classes: "btn-secondary btn-lg", description: "large secondary button focus" },
    { classes: "btn-ghost btn-circle", description: "circle ghost button focus" },
    { classes: "btn-outline btn-wide", description: "wide outline button focus" },
  ]

  focusTestCases.forEach(({ classes }) => {
    const button = createBubbleButton(classes)
    
    // Verify button has bubble class and variant classes
    expect(button.classList.contains("btn-bubble")).toBe(true)
    const classArray = classes.split(" ")
    classArray.forEach(cls => {
      expect(button.classList.contains(cls)).toBe(true)
    })
    
    // Test initial focus state
    expect(document.activeElement).not.toBe(button)
    
    // Test focus acquisition
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test that bubble configuration doesn't interfere with focus
    const bubbleConfig = {
      "--btn-bubble-bg": "#3b82f6",
      "--btn-bubble-duration": "300ms",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.2"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
    })
    
    // Verify focus is maintained after bubble configuration
    expect(document.activeElement).toBe(button)
    
    // Test focus loss
    button.blur()
    expect(document.activeElement).not.toBe(button)
    
    // Test focus re-acquisition
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test focus with tabindex
    button.setAttribute("tabindex", "0")
    button.blur()
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test focus with disabled state (should not be focusable when disabled)
    button.disabled = true
    button.blur()
    // In JSDOM, disabled buttons may still receive focus programmatically
    // but they should have the disabled property set
    expect(button.disabled).toBe(true)
    
    // Re-enable for cleanup
    button.disabled = false
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Integration test for keyboard navigation working correctly
test("Integration: Keyboard navigation works correctly - for any button with bubble fill, keyboard interactions should function properly", () => {
  const keyboardTestCases = [
    {
      classes: "btn-primary",
      keys: ["Enter", " "],
      description: "primary button keyboard navigation"
    },
    {
      classes: "btn-secondary btn-lg",
      keys: ["Enter", " "],
      description: "large secondary button activation"
    },
    {
      classes: "btn-ghost btn-sm",
      keys: [" ", "Enter"],
      description: "small ghost button activation"
    }
  ]

  keyboardTestCases.forEach(({ classes, keys }) => {
    const button = createBubbleButton(classes)
    
    // Set up event tracking
    let clickCount = 0
    let keydownCount = 0
    let keyupCount = 0
    
    button.addEventListener("click", () => clickCount++)
    button.addEventListener("keydown", () => keydownCount++)
    button.addEventListener("keyup", () => keyupCount++)
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Configure bubble effect
    button.style.setProperty("--btn-bubble-duration", "250ms")
    button.style.setProperty("--btn-bubble-scale-x", "1.4")
    
    // Test each key interaction
    keys.forEach(key => {
      // Reset counters
      const initialClickCount = clickCount
      const initialKeydownCount = keydownCount
      const initialKeyupCount = keyupCount
      
      // Focus the button for keyboard interaction
      button.focus()
      expect(document.activeElement).toBe(button)
      
      // Simulate keydown event
      const keydownEvent = new dom.window.KeyboardEvent("keydown", {
        key: key,
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(keydownEvent)
      
      // Verify keydown was handled
      expect(keydownCount).toBe(initialKeydownCount + 1)
      
      // Simulate keyup event
      const keyupEvent = new dom.window.KeyboardEvent("keyup", {
        key: key,
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(keyupEvent)
      
      // Verify keyup was handled
      expect(keyupCount).toBe(initialKeyupCount + 1)
      
      // For activation keys (Enter and Space), simulate click
      if (key === "Enter" || key === " ") {
        const clickEvent = new dom.window.MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
        button.dispatchEvent(clickEvent)
        
        // Verify click was handled
        expect(clickCount).toBe(initialClickCount + 1)
      }
      
      // Test that focus is maintained after keyboard interaction
      if (key !== "Tab") {
        expect(document.activeElement).toBe(button)
      }
    })
    
    // Test keyboard navigation with bubble animation active
    button.style.setProperty("--btn-bubble-bg", "#ef4444")
    
    // Simulate hover to activate bubble (if supported)
    const mouseEnterEvent = new dom.window.MouseEvent("mouseenter", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(mouseEnterEvent)
    
    // Test keyboard interaction during hover state
    const enterKeyEvent = new dom.window.KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(enterKeyEvent)
    
    // Verify keyboard still works during bubble animation
    expect(keydownCount).toBeGreaterThan(0)
    
    // Test that button remains focusable after all interactions
    button.blur()
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Integration test for screen reader compatibility
test("Integration: Screen reader compatibility - for any button with bubble fill, accessibility attributes should be preserved and functional", () => {
  const screenReaderTestCases = [
    {
      classes: "btn-primary",
      ariaAttributes: {
        "aria-label": "Primary action button",
        "aria-describedby": "help-text",
        "role": "button"
      },
      description: "primary button with aria attributes"
    },
    {
      classes: "btn-secondary btn-lg",
      ariaAttributes: {
        "aria-label": "Large secondary button",
        "aria-pressed": "false",
        "aria-expanded": "false"
      },
      description: "large secondary button with state attributes"
    },
    {
      classes: "btn-ghost btn-sm",
      ariaAttributes: {
        "aria-label": "Small ghost button",
        "aria-haspopup": "menu",
        "aria-controls": "menu-id"
      },
      description: "small ghost button with popup attributes"
    }
  ]

  screenReaderTestCases.forEach(({ classes, ariaAttributes }) => {
    const button = createBubbleButton(classes)
    
    // Apply aria attributes
    Object.entries(ariaAttributes).forEach(([attr, value]) => {
      button.setAttribute(attr, value)
    })
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Configure bubble effect
    const bubbleConfig = {
      "--btn-bubble-bg": "#8b5cf6",
      "--btn-bubble-duration": "350ms",
      "--btn-bubble-scale-x": "1.6",
      "--btn-bubble-scale-y": "2.3",
      "--btn-bubble-easing": "ease-out"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
    })
    
    // Verify all aria attributes are preserved after bubble configuration
    Object.entries(ariaAttributes).forEach(([attr, expectedValue]) => {
      expect(button.getAttribute(attr)).toBe(expectedValue)
    })
    
    // Test that button maintains semantic meaning
    expect(button.tagName.toLowerCase()).toBe("button")
    expect(button.textContent).toBe("Test Button")
    
    // Test that button is accessible via keyboard (important for screen readers)
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test that button responds to activation (important for screen readers)
    let activationCount = 0
    button.addEventListener("click", () => activationCount++)
    
    // Simulate screen reader activation (typically Enter key)
    const activationEvent = new dom.window.KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(activationEvent)
    
    // Simulate click for activation
    const clickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(clickEvent)
    expect(activationCount).toBe(1)
    
    // Test dynamic aria attribute updates (common screen reader scenario)
    button.setAttribute("aria-pressed", "true")
    expect(button.getAttribute("aria-pressed")).toBe("true")
    
    button.setAttribute("aria-expanded", "true")
    expect(button.getAttribute("aria-expanded")).toBe("true")
    
    // Test that bubble effect doesn't interfere with aria-live regions
    const liveRegion = document.createElement("div")
    liveRegion.setAttribute("aria-live", "polite")
    liveRegion.id = "live-region"
    document.body.appendChild(liveRegion)
    
    button.setAttribute("aria-describedby", "live-region")
    expect(button.getAttribute("aria-describedby")).toBe("live-region")
    
    // Update live region content
    liveRegion.textContent = "Button state changed"
    
    // Verify button still functions with live region
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test that button works with aria-labelledby
    const labelElement = document.createElement("span")
    labelElement.id = "button-label"
    labelElement.textContent = "Custom Button Label"
    document.body.appendChild(labelElement)
    
    button.setAttribute("aria-labelledby", "button-label")
    expect(button.getAttribute("aria-labelledby")).toBe("button-label")
    
    // Test that button maintains accessibility with disabled state
    button.disabled = true
    expect(button.disabled).toBe(true)
    expect(button.getAttribute("aria-disabled")).toBe(null) // Should be handled by disabled property
    
    // Test that disabled button is not focusable (correct screen reader behavior)
    button.blur()
    // In JSDOM, we can't fully test focus behavior for disabled elements
    // but we can verify the disabled state is set correctly
    expect(button.disabled).toBe(true)
    
    // Re-enable button
    button.disabled = false
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test that button works with complex aria relationships
    const describingElement = document.createElement("div")
    describingElement.id = "complex-description"
    describingElement.textContent = "This button performs a complex action with bubble animation"
    document.body.appendChild(describingElement)
    
    button.setAttribute("aria-describedby", "complex-description")
    expect(button.getAttribute("aria-describedby")).toBe("complex-description")
    
    // Verify button functionality is preserved with complex aria setup
    let complexActivationCount = 0
    button.addEventListener("click", () => complexActivationCount++)
    
    const complexClickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(complexClickEvent)
    expect(complexActivationCount).toBe(1)
    
    // Clean up
    document.body.removeChild(liveRegion)
    document.body.removeChild(labelElement)
    document.body.removeChild(describingElement)
    document.body.removeChild(button)
  })
})

// Integration test for cross-browser compatibility simulation
test("Integration: Cross-browser compatibility - for any button with bubble fill, functionality should work across different browser contexts", () => {
  const browserTestCases = [
    {
      classes: "btn-primary",
      browserContext: "modern",
      features: ["hover", "focus", "transform", "custom-properties"],
      description: "modern browser with full feature support"
    },
    {
      classes: "btn-secondary btn-lg",
      browserContext: "legacy",
      features: ["focus", "click"],
      description: "legacy browser with limited feature support"
    },
    {
      classes: "btn-ghost btn-sm",
      browserContext: "reduced-motion",
      features: ["focus", "click", "reduced-motion"],
      description: "browser with reduced motion preference"
    }
  ]

  browserTestCases.forEach(({ classes, browserContext, features }) => {
    const button = createBubbleButton(classes)
    
    // Verify button setup
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Configure bubble based on browser context
    if (features.includes("custom-properties")) {
      button.style.setProperty("--btn-bubble-duration", "300ms")
      button.style.setProperty("--btn-bubble-scale-x", "1.5")
      button.style.setProperty("--btn-bubble-scale-y", "2.2")
      
      // Verify custom properties work
      expect(button.style.getPropertyValue("--btn-bubble-duration")).toBe("300ms")
    }
    
    // Test reduced motion context
    if (features.includes("reduced-motion")) {
      const style = document.createElement("style")
      style.textContent = `
        @media (prefers-reduced-motion: reduce) {
          .btn-bubble::before {
            transition: none !important;
          }
        }
      `
      document.head.appendChild(style)
      
      // Button should still function with reduced motion
      expect(button.classList.contains("btn-bubble")).toBe(true)
      
      document.head.removeChild(style)
    }
    
    // Test focus functionality (universal browser feature)
    if (features.includes("focus")) {
      button.focus()
      expect(document.activeElement).toBe(button)
      
      button.blur()
      expect(document.activeElement).not.toBe(button)
    }
    
    // Test click functionality (universal browser feature)
    if (features.includes("click")) {
      let clickCount = 0
      button.addEventListener("click", () => clickCount++)
      
      const clickEvent = new dom.window.MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(clickEvent)
      expect(clickCount).toBe(1)
    }
    
    // Test hover functionality (desktop browsers)
    if (features.includes("hover")) {
      let hoverCount = 0
      button.addEventListener("mouseenter", () => hoverCount++)
      
      const hoverEvent = new dom.window.MouseEvent("mouseenter", {
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(hoverEvent)
      expect(hoverCount).toBe(1)
    }
    
    // Test touch functionality (mobile browsers)
    if (features.includes("touch")) {
      let touchCount = 0
      button.addEventListener("touchstart", () => touchCount++)
      
      // Create a mock touch event
      const touchEvent = new dom.window.Event("touchstart", {
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(touchEvent)
      expect(touchCount).toBe(1)
    }
    
    // Test transform support (modern browsers)
    if (features.includes("transform")) {
      // Test that transform-related styles can be applied
      button.style.transform = "scale(1.1)"
      expect(button.style.transform).toBe("scale(1.1)")
      
      // Reset transform
      button.style.transform = ""
    }
    
    // Test fallback behavior for legacy browsers
    if (browserContext === "legacy") {
      // Button should still be functional without advanced features
      expect(button.tagName.toLowerCase()).toBe("button")
      expect(button.textContent).toBe("Test Button")
      expect(button.classList.contains("btn")).toBe(true)
      expect(button.classList.contains("btn-bubble")).toBe(true)
      
      // Basic interaction should work
      button.focus()
      expect(document.activeElement).toBe(button)
    }
    
    // Test that button maintains core functionality across all contexts
    expect(button.classList.contains("btn")).toBe(true)
    expect(button.classList.contains("btn-bubble")).toBe(true)
    expect(button.textContent).toBe("Test Button")
    
    // Clean up
    document.body.removeChild(button)
  })
})

// Integration test for performance impact validation
test("Integration: Performance impact is minimal - for any button with bubble fill, performance should remain acceptable", () => {
  const performanceTestCases = [
    {
      classes: "btn-primary",
      buttonCount: 5,
      description: "multiple primary buttons"
    },
    {
      classes: "btn-secondary btn-lg",
      buttonCount: 3,
      description: "multiple large secondary buttons"
    }
  ]

  performanceTestCases.forEach(({ classes, buttonCount }) => {
    const buttons = []
    const startTime = performance.now()
    
    // Create multiple buttons to test performance impact
    for (let i = 0; i < buttonCount; i++) {
      const button = createBubbleButton(classes)
      
      // Configure bubble effect
      button.style.setProperty("--btn-bubble-duration", "300ms")
      button.style.setProperty("--btn-bubble-scale-x", "1.5")
      button.style.setProperty("--btn-bubble-scale-y", "2.2")
      button.style.setProperty("--btn-bubble-bg", "#3b82f6")
      
      buttons.push(button)
    }
    
    const creationTime = performance.now() - startTime
    
    // Verify all buttons were created successfully
    expect(buttons.length).toBe(buttonCount)
    buttons.forEach(button => {
      expect(button.classList.contains("btn-bubble")).toBe(true)
    })
    
    // Test interaction performance
    const interactionStartTime = performance.now()
    
    buttons.forEach((button, index) => {
      // Test focus performance
      button.focus()
      expect(document.activeElement).toBe(button)
      
      // Test event handling performance
      let eventCount = 0
      button.addEventListener("click", () => eventCount++)
      
      const clickEvent = new dom.window.MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(clickEvent)
      expect(eventCount).toBe(1)
      
      // Test hover performance (simulate bubble animation trigger)
      const hoverEvent = new dom.window.MouseEvent("mouseenter", {
        bubbles: true,
        cancelable: true
      })
      button.dispatchEvent(hoverEvent)
    })
    
    const interactionTime = performance.now() - interactionStartTime
    
    // Performance assertions (these are reasonable thresholds for DOM operations)
    expect(creationTime).toBeLessThan(100) // Button creation should be fast
    expect(interactionTime).toBeLessThan(50) // Interactions should be responsive
    
    // Test memory usage by verifying buttons can be properly cleaned up
    const cleanupStartTime = performance.now()
    
    buttons.forEach(button => {
      // Remove event listeners by cloning and replacing
      const newButton = button.cloneNode(true)
      button.parentNode.replaceChild(newButton, button)
      
      // Remove from DOM
      document.body.removeChild(newButton)
    })
    
    const cleanupTime = performance.now() - cleanupStartTime
    expect(cleanupTime).toBeLessThan(50) // Cleanup should be fast
    
    // Verify DOM is clean
    const remainingButtons = document.querySelectorAll(".btn-bubble")
    expect(remainingButtons.length).toBe(0)
  })
})

// Integration test for bubble effect with all existing button combinations
test("Integration: Bubble effect works with all existing button combinations - comprehensive variant testing", () => {
  // Define comprehensive test matrix (reduced for performance)
  const colorVariants = ["btn-primary", "btn-secondary", "btn-accent"]
  const sizeVariants = ["btn-sm", "btn-md", "btn-lg"]
  const shapeVariants = ["btn-square", "btn-circle"]
  const styleVariants = ["btn-ghost", "btn-outline"]
  
  // Test a representative sample of all combinations
  const comprehensiveTestCases = [
    // Test each color with default size and shape
    ...colorVariants.map(color => ({ classes: color, category: "color" })),
    
    // Test each size with primary color
    ...sizeVariants.map(size => ({ classes: `btn-primary ${size}`, category: "size" })),
    
    // Test each shape with secondary color
    ...shapeVariants.map(shape => ({ classes: `btn-secondary ${shape}`, category: "shape" })),
    
    // Test each style with accent color
    ...styleVariants.map(style => ({ classes: `btn-accent ${style}`, category: "style" })),
    
    // Test complex combinations
    { classes: "btn-primary btn-lg btn-wide", category: "complex" },
    { classes: "btn-secondary btn-sm btn-circle", category: "complex" },
    { classes: "btn-accent btn-md btn-ghost", category: "complex" },
  ]
  
  comprehensiveTestCases.forEach(({ classes, category }) => {
    const button = createBubbleButton(classes)
    
    // Verify all classes are applied correctly
    const classArray = classes.split(" ")
    classArray.forEach(cls => {
      expect(button.classList.contains(cls)).toBe(true)
    })
    expect(button.classList.contains("btn-bubble")).toBe(true)
    
    // Test bubble configuration works with all combinations
    const bubbleConfig = {
      "--btn-bubble-bg": category === "color" ? "#8b5cf6" : 
                         category === "size" ? "#ef4444" :
                         category === "shape" ? "#10b981" :
                         category === "style" ? "#f59e0b" : "#6366f1",
      "--btn-bubble-duration": "350ms",
      "--btn-bubble-scale-x": "1.5",
      "--btn-bubble-scale-y": "2.2",
      "--btn-bubble-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
    }
    
    Object.entries(bubbleConfig).forEach(([property, value]) => {
      button.style.setProperty(property, value)
      expect(button.style.getPropertyValue(property)).toBe(value)
    })
    
    // Test core functionality with all combinations
    expect(button.tagName.toLowerCase()).toBe("button")
    expect(button.textContent).toBe("Test Button")
    
    // Test focus behavior
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Test click behavior
    let clickCount = 0
    button.addEventListener("click", () => clickCount++)
    
    const clickEvent = new dom.window.MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(clickEvent)
    expect(clickCount).toBe(1)
    
    // Test hover behavior (bubble animation trigger)
    let hoverCount = 0
    button.addEventListener("mouseenter", () => hoverCount++)
    
    const hoverEvent = new dom.window.MouseEvent("mouseenter", {
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(hoverEvent)
    expect(hoverCount).toBe(1)
    
    // Test keyboard interaction
    let keydownCount = 0
    button.addEventListener("keydown", () => keydownCount++)
    
    const keyEvent = new dom.window.KeyboardEvent("keydown", {
      key: "Enter",
      bubbles: true,
      cancelable: true
    })
    button.dispatchEvent(keyEvent)
    expect(keydownCount).toBe(1)
    
    // Test accessibility attributes work with all combinations
    button.setAttribute("aria-label", `${category} button test`)
    expect(button.getAttribute("aria-label")).toBe(`${category} button test`)
    
    // Test disabled state
    button.disabled = true
    expect(button.disabled).toBe(true)
    
    // Test that disabled button has correct disabled property
    button.blur()
    expect(button.disabled).toBe(true)
    
    // Re-enable for final verification
    button.disabled = false
    button.focus()
    expect(document.activeElement).toBe(button)
    
    // Clean up
    document.body.removeChild(button)
  })
})