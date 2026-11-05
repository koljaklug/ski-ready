# Ski Ready — Native iPhone Build Brief

## Product

Build **Ski Ready**, an iPhone-only SwiftUI fitness app for a short ski-season preparation routine. The app lets people choose exercises or begin the complete 20-minute circuit, record reps/weight, receive form guidance, and review local training history.

## Platform and data

- Target iOS 18+ with SwiftUI, supporting Dynamic Type, Dark Mode, VoiceOver, and portrait/landscape adaptation.
- Store routines, per-exercise defaults, and history on-device using SwiftData. No account or cloud sync in version 1.
- Keep all user history private. Add HealthKit only as an explicit, optional future feature.

## Information architecture

1. **Home** — Two primary actions: “Select exercises” and “Start 20-minute training.” Show a compact history button in the navigation bar.
2. **Exercise picker** — Standard SwiftUI `List` rows with checkmark selection, a 3-set default, and recommended reps/time.
3. **Guided session** — One exercise at a time. Show set/round progress, one static form image, a concise focus callout, editable rep/time and weight targets, then a full-width “Done — next exercise” button.
4. **Form guide** — Present detailed setup, movement, and common-mistake information in a SwiftUI sheet.
5. **History** — Date, actual duration, completed sets, targets, and session type.

## Native components

- Use `NavigationStack`, `List`, `Button`, `TextField`, `ProgressView`, `sheet`, `ToolbarItem`, and `TabView` only where they improve familiarity.
- Use SF Symbols (for example `clock`, `info.circle`, `checkmark.circle.fill`, `chevron.right`) instead of custom glyphs.
- Use `Color.accentColor`, semantic system backgrounds, and Apple system typography. Avoid hardcoded values that break Dark Mode.
- Provide 44×44 pt minimum tappable areas. Respect safe areas and use Dynamic Type styles (`.title`, `.headline`, `.body`, `.caption`).

## Form images

- Use exactly one core still image per exercise in the session view, not video or animated loops.
- Preserve the image’s aspect ratio and provide descriptive VoiceOver labels.
- Put the essential cue in text below the image; imagery must not be the only way to understand form.

## Core data model

```swift
@Model final class ExercisePreference {
    var exerciseID: String
    var target: Int
    var addedWeight: Double?
}

@Model final class TrainingSession {
    var date: Date
    var durationSeconds: Int
    var mode: String
    var completedSets: [CompletedExercise]
}

struct CompletedExercise: Codable {
    var exerciseID: String
    var sets: Int
    var target: Int
    var unit: String
    var addedWeight: Double?
}
```

## Acceptance checklist

- All controls can be reached and clearly read at the largest Dynamic Type size.
- The workout can be completed entirely with VoiceOver.
- The primary action is always obvious; secondary detail stays behind the form-guide sheet.
- Training records persist after the app is closed and reopened.
- Form images have labels, and all instructions remain understandable without images.
