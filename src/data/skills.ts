export const dummySkills: SkillRecord[] = [
	{
		id: "skill-001",
		title: "Code Review",
		slug: "code-review",
		description:
			"Review code changes for bugs, security issues, and readability.",
		category: "Development",
		tags: ["review", "security", "quality"],
		installCommand: "npx skills add example/agent-skills --skill code-review",
		createdAt: "2026-10-12T09:00:00Z",
		authorClerkId: null,
		authorEmail: "alex@example.com",
	},
	{
		id: "skill-002",
		title: "API Documentation",
		slug: "api-documentation",
		description:
			"Write API documentation with request examples and error responses.",
		category: "Documentation",
		tags: ["api", "documentation", "openapi"],
		installCommand:
			"npx skills add example/agent-skills --skill api-documentation",
		createdAt: "2026-10-11T09:00:00Z",
		authorClerkId: null,
		authorEmail: "sam@example.com",
	},
	{
		id: "skill-003",
		title: "Accessibility Audit",
		slug: "accessibility-audit",
		description:
			"Check interfaces for keyboard navigation, contrast, and screen reader support.",
		category: "Design",
		tags: ["accessibility", "ui", "audit"],
		installCommand:
			"npx skills add example/agent-skills --skill accessibility-audit",
		createdAt: "2026-10-10T09:00:00Z",
		authorClerkId: null,
		authorEmail: "jordan@example.com",
	},
	{
		id: "skill-004",
		title: "Database Optimization",
		slug: "database-optimization",
		description:
			"Analyze slow queries and suggest indexes using query execution plans.",
		category: "Data",
		tags: ["sql", "database", "performance"],
		installCommand:
			"npx skills add example/agent-skills --skill database-optimization",
		createdAt: "2026-10-09T09:00:00Z",
		authorClerkId: null,
		authorEmail: "taylor@example.com",
	},
	{
		id: "skill-005",
		title: "Release Notes",
		slug: "release-notes",
		description:
			"Turn merged changes into release notes grouped by features and fixes.",
		category: "Automation",
		tags: ["releases", "changelog", "git"],
		installCommand: "npx skills add example/agent-skills --skill release-notes",
		createdAt: "2026-10-08T09:00:00Z",
		authorClerkId: null,
		authorEmail: null,
	},
]
