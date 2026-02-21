import Image from "next/image"

interface BrowserFrameProps {
  src: string
  alt: string
  url?: string
}

export function BrowserFrame({ src, alt, url }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-t-2xl bg-muted/50">
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-4 h-10">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="size-2.5 rounded-full bg-red-400/60" />
          <span className="size-2.5 rounded-full bg-yellow-400/60" />
          <span className="size-2.5 rounded-full bg-green-400/60" />
        </div>
        {url && (
          <div className="flex-1 mx-2">
            <div className="bg-border/40 text-muted-foreground/70 text-xs rounded px-3 py-1 truncate max-w-xs mx-auto text-center">
              {url}
            </div>
          </div>
        )}
      </div>

      {/* Screenshot — flush, no gap */}
      <div style={{ lineHeight: 0 }}>
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          className="w-full h-auto block group-hover:scale-[1.015] transition-transform duration-500 origin-top"
        />
      </div>
    </div>
  )
}
