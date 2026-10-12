import { Link } from "@tanstack/react-router"
import {
	ArrowBigUp,
	ArrowUpRight,
	Bookmark,
	Check,
	Copy,
	MessageSquare,
} from "lucide-react"
import { useEffect, useState } from "react"

const SkillCard = ({
	authorEmail,
	category,
	createdAt,
	description,
	title,
	tags,
	installCommand,
}: SkillRecord) => {
	const [copyStatus, setCopyStatus] = useState("")
	const [copied, setCopied] = useState(false)
	const [copyFailed, setCopyFailed] = useState(false)

	useEffect(() => {
		if (!copied) return
		const timeout = window.setTimeout(() => {
			setCopied(false)
			setCopyStatus("")
		}, 2000)
		return () => window.clearTimeout(timeout)
	}, [copied])

	const copyCommand = async () => {
		setCopied(false)
		try {
			await navigator.clipboard.writeText(installCommand)
			setCopied(true)
			setCopyFailed(false)
			setCopyStatus("Install command copied.")
		} catch {
			setCopyFailed(true)
			setCopyStatus(
				"Unable to copy. Please select and copy the command manually.",
			)
		}
	}

	return (
		<article className="skill-card">
			<Link
				to="/skills"
				tabIndex={-1}
				aria-label={`Open ${title}`}
				className="overlay"
			/>
			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red"></div>
						<div className="light amber"></div>
						<div className="light green"></div>
						<div className="host">registry.sh</div>
					</div>
				</div>
			</div>

			<div className="body">
				<div className="meta">
					<div className="author">
						<img src="/logo512.png" alt="author avatar" className="avatar" />
						<div className="author-copy">
							<p>Adam</p>
							<p>{new Date(createdAt as string).toLocaleDateString()}</p>
						</div>
					</div>

					<p className="category">{category}</p>
				</div>

				<div className="summary">
					<Link to="/skills" className="title-link">
						<h3>{title}</h3>
					</Link>

					<p>{description}</p>
				</div>
				<div className="command">
					<div className="command-copy">
						<span>{">_:"}</span>
						<p>{installCommand}</p>
					</div>
					<button
						type="button"
						className="copy"
						data-copied={copied}
						aria-label={
							copied ? "Install command copied" : "Copy install command"
						}
						onClick={copyCommand}
					>
						{copied ? (
							<Check size={16} aria-hidden="true" />
						) : (
							<Copy size={16} aria-hidden="true" />
						)}
						{copied && <span>Copied!</span>}
					</button>
				</div>
				<output className={copyFailed ? "text-sm text-red-300" : "sr-only"}>
					{copyStatus}
				</output>
				{copyFailed && (
					<textarea
						aria-label="Install command to copy manually"
						className="w-full resize-y rounded-md border border-border-subtle bg-base p-3 font-mono text-xs text-foreground"
						readOnly
						rows={3}
						value={installCommand}
						onFocus={(event) => event.currentTarget.select()}
					/>
				)}

				<div className="footer">
					<div className="stats">
						<button
							type="button"
							className="upvote"
							onClick={() => {}}
							disabled
						>
							<ArrowBigUp size={16} fill="currentColor" />
							<span>{tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquare size={14} />
							<span>{authorEmail ? 1 : 0}</span>
						</div>
					</div>

					<div className="actions">
						<Link to="/skills" className="open" title={`Open ${title}`}>
							<span>Open</span>
							<ArrowUpRight size={16} />
						</Link>
						<button
							className="save"
							type="button"
							aria-label="Saved State"
							disabled
						>
							<Bookmark size={16} />
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}

export default SkillCard
