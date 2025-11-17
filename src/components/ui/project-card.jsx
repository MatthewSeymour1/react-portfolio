import React from 'react'
import { cn } from '@/lib/utils'

// Simple shadcn-like Card component for a project
export default function ProjectCard({ project }) {
  const { title, description, screenshots, url, github, date, tags } = project

  return (
    <article className={cn('rounded-lg border p-4 bg-card/50 shadow-sm') }>
      <div className="overflow-hidden rounded-md">
        {screenshots && screenshots[0] && (
          <img
            src={screenshots[0].url}
            alt={screenshots[0].caption || title}
            className="w-full h-48 object-cover"
          />
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags && tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-muted/30">{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">{date}</div>
          <div className="flex items-center gap-3">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="text-sm text-primary underline">Code</a>
            )}
            {url && (
              <a href={url} target="_blank" rel="noreferrer" className="text-sm text-primary underline">Live</a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
