# Diagramming Guide

> Diagram types, notation standards, and best practices for clear visual communication.

**Part of:** [Visual Communication](../visual-communication-skill.md)

---

## Diagram Types and When to Use Each

### Decision Guide

| Diagram Type | Best For | Example Use |
|-------------|---------|-------------|
| **Flowchart** | Processes with decisions | User signup flow, approval workflow |
| **Sequence diagram** | Interactions between systems/actors | API calls, user-system dialogue |
| **Architecture diagram** | System components and connections | Microservices layout, infrastructure |
| **State machine** | Object lifecycle and transitions | Order status, account states |
| **ER diagram** | Data relationships | Database schema, domain model |
| **Journey map** | User experience across touchpoints | Customer onboarding experience |
| **Concept map** | Relationships between ideas | Product strategy, domain knowledge |
| **Mind map** | Brainstorming and categorization | Feature ideation, research themes |
| **Swimlane** | Processes across multiple actors/teams | Cross-functional workflows |

### Flowcharts

**When to use:** Any process that has steps, decisions, and branches.

**Standard shapes:**
- **Rectangle:** Process step / action
- **Diamond:** Decision point (yes/no question)
- **Oval/Rounded rectangle:** Start / End
- **Parallelogram:** Input / Output
- **Arrow:** Flow direction

**Rules:**
- Flow top-to-bottom or left-to-right (never both in the same diagram)
- Every decision has exactly two outputs (yes/no, true/false)
- Every path eventually reaches an end
- Label every arrow coming out of a decision

### Sequence Diagrams

**When to use:** Showing how actors (users, systems, services) interact over time.

**Key elements:**
- **Lifelines:** Vertical lines for each actor/system
- **Messages:** Horizontal arrows showing communication
- **Activation bars:** Rectangles showing when an actor is active
- **Return messages:** Dashed arrows for responses

**Rules:**
- Time flows top-to-bottom
- Keep actors to 5-7 maximum
- Label every message with what's being communicated
- Use dashed lines for return/response messages

### Architecture Diagrams

**When to use:** Showing how system components connect and communicate.

**Key elements:**
- **Boxes:** Components, services, databases
- **Lines:** Connections, data flow
- **Groups/boundaries:** Logical groupings (VPC, domain, team)
- **Annotations:** Protocols, data formats, key details

**Levels of detail:**
- **Context:** Your system as a black box, showing external actors and systems
- **Container:** Major components within your system (web app, API, database)
- **Component:** Internal structure of a single container
- **Code:** Class-level detail (rarely worth diagramming)

### State Machines

**When to use:** An object has distinct states and transitions between them.

**Key elements:**
- **States:** Rounded rectangles
- **Transitions:** Arrows with trigger labels
- **Initial state:** Filled circle
- **Final state:** Bullseye (circle with dot)

**Example (Order):**
```
[Created] → Payment received → [Paid] → Shipped → [In Transit] → Delivered → [Complete]
                                  ↓                                    ↓
                            Refund requested                    Return requested
                                  ↓                                    ↓
                              [Refunded]                          [Returned]
```

### Swimlane Diagrams

**When to use:** A process spans multiple teams, roles, or systems.

**Structure:**
- Each lane represents an actor (team, role, system)
- Process flows left-to-right or top-to-bottom
- Steps are placed in the lane of the responsible actor
- Arrows cross lanes to show handoffs

**Best for:** Cross-functional process documentation, handoff clarification, finding bottlenecks.

---

## Notation Standards

### UML Basics (For Software)

**Most commonly used UML diagrams:**

| Diagram | Purpose | Audience |
|---------|---------|----------|
| Use case | What users can do | Product, stakeholders |
| Class | Data structure and relationships | Engineering |
| Sequence | System interactions | Engineering |
| Activity | Process flow (like flowcharts) | Anyone |
| State | Object lifecycle | Engineering, product |

**When to use formal UML:** When your audience expects it (engineering teams, technical documentation, architecture reviews).

**When to skip formal UML:** When informal diagrams communicate just as well (stakeholder presentations, brainstorming, early design).

### BPMN Basics (For Processes)

**Key BPMN elements:**

| Element | Symbol | Meaning |
|---------|--------|---------|
| Task | Rounded rectangle | A unit of work |
| Gateway (Exclusive) | Diamond with X | Decision, one path chosen |
| Gateway (Parallel) | Diamond with + | All paths taken simultaneously |
| Start event | Thin circle | Process begins |
| End event | Thick circle | Process ends |
| Pool/Lane | Horizontal band | Actor or department |

**When to use BPMN:** Business process documentation, workflow automation, process improvement.

---

## Diagramming Best Practices

### Hierarchy

- **Title the diagram** clearly — the viewer should know what they're looking at instantly
- **Group related elements** visually (boxes, shading, proximity)
- **Use size to indicate importance** when appropriate
- **Create clear visual paths** — the eye should flow naturally through the diagram

### Labeling

- **Label everything:** Every box, every arrow, every group
- **Use verb phrases for actions:** "Send notification" not just "Notification"
- **Use noun phrases for objects:** "User database" not "stores user data"
- **Be consistent:** Same terminology throughout

### Flow Direction

- **Horizontal (left-to-right):** Processes, timelines, workflows
- **Vertical (top-to-bottom):** Hierarchies, sequences, decomposition
- **Never mix** flow directions in the same diagram
- **Arrow direction = data/process flow** — be consistent

### Color Use

- **Functional, not decorative:** Color should encode meaning (status, category, actor)
- **Limit to 3-5 colors** per diagram
- **Include a legend** if colors aren't obvious
- **Ensure accessibility:** Don't rely on color alone — use shapes, patterns, or labels as backup
- **Gray for de-emphasis:** Use gray for context elements that aren't the focus

---

## Tool-Specific Guidance

### Mermaid (Code-Based Diagrams)

**Best for:** Diagrams in documentation, version-controlled diagrams, quick diagramming.

**Supported types:** Flowchart, sequence, state, class, ER, Gantt, journey

**When to use Mermaid:**
- Diagrams that live alongside code (README, wiki, docs-as-code)
- Quick diagrams during discussions or documentation
- Diagrams that need version control (changes tracked in git)

**When NOT to use Mermaid:**
- Complex diagrams with many elements (layout limitations)
- Diagrams that need pixel-perfect positioning
- Customer-facing presentations

### FigJam (Collaborative)

**Best for:** Workshop outputs, brainstorming, collaborative diagramming.

**When to use FigJam:**
- Team workshops and brainstorming sessions
- Journey maps and service blueprints
- Affinity mapping and synthesis
- Diagrams built collaboratively in real-time

### Dedicated Tools (Lucidchart, draw.io, Excalidraw)

**Best for:** Detailed, polished diagrams for documentation or presentations.

**When to use:**
- Architecture diagrams that need precise layout
- Complex flowcharts with many branches
- Diagrams that will be reused and updated over time
- Customer-facing or formal documentation

---

## Diagram Complexity Management

### When to Split

**Your diagram needs splitting when:**
- It doesn't fit on a single screen/page without squinting
- There are more than 15-20 elements
- Two distinct processes are mixed together
- The audience needs different levels of detail

### Layered Diagrams

**Level 1 — Overview:** High-level boxes showing major components or phases.
**Level 2 — Detail:** Each Level 1 box expanded into its own diagram.
**Level 3 — Implementation:** Technical specifics for individual components.

**Navigation:** Each level should reference the others ("See Diagram 2.3 for payment flow detail").

### Zoom Levels

When presenting:
- Start with the overview diagram to establish context
- Zoom into specific areas based on the audience's interest
- Keep the overview visible (or easily accessible) so viewers don't lose context

---

## Common Diagramming Mistakes

### Too Much Detail

**Symptom:** Diagram has 40+ elements, tiny text, crossing lines everywhere.
**Fix:** Split into multiple diagrams at different levels of detail. The overview should have 5-10 elements.

### Inconsistent Notation

**Symptom:** Rectangles mean different things in different parts of the diagram. Arrow styles vary randomly.
**Fix:** Pick a notation and stick to it. Include a legend if the notation isn't universally obvious.

### Missing Labels

**Symptom:** Boxes labeled "Service A" or arrows with no labels. Viewer has to guess what things mean.
**Fix:** Label everything with specific, descriptive names. If an arrow represents data flow, label it with what's flowing.

### Unclear Flow

**Symptom:** No obvious starting point. Lines cross in confusing ways. Direction isn't consistent.
**Fix:** Establish clear entry/exit points. Use one consistent flow direction. Route lines to avoid crossings.

### Using Diagrams When Text Would Be Better

**Symptom:** A diagram that's really just a list of items with arrows between everything.
**Fix:** If the relationships aren't meaningful, a bulleted list or table communicates more clearly.

### Never Updating

**Symptom:** The architecture diagram shows last year's system. Nobody trusts it.
**Fix:** Treat diagrams as living documents. Schedule regular reviews (quarterly for architecture, per-sprint for processes). Delete diagrams that are permanently outdated.
