'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// High quality avatars from Unsplash
const INDUS_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
const LOTUS_AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
const SIAM_AVATAR = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
const NIPPON_AVATAR = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'

export type ExporterTransaction = {
  id: string
  date: string
  status: 'Certified' | 'Under Review' | 'Declined'
  statusVariant: 'success' | 'warning' | 'danger'
  name: string
  avatar: string
  fee: string
}

export type ExporterTransactionsCardProps = {
  title?: string
  subtitle?: string
  className?: string
  transactions?: ExporterTransaction[]
}

const DEFAULT_TRANSACTIONS: ExporterTransaction[] = [
  {
    id: "TXN-89302",
    date: 'Jun 08, 2026',
    status: 'Certified',
    statusVariant: 'success',
    name: 'Indus Agro Exports',
    avatar: INDUS_AVATAR,
    fee: '$55.00',
  },
  {
    id: "TXN-89299",
    date: 'Jun 08, 2026',
    status: 'Under Review',
    statusVariant: 'warning',
    name: 'Lotus Biotech Ltd',
    avatar: LOTUS_AVATAR,
    fee: '$85.00',
  },
  {
    id: "TXN-89295",
    date: 'Jun 07, 2026',
    status: 'Certified',
    statusVariant: 'success',
    name: 'Siam Silk Traders',
    avatar: SIAM_AVATAR,
    fee: '$45.00',
  },
  {
    id: "TXN-89288",
    date: 'Jun 07, 2026',
    status: 'Declined',
    statusVariant: 'danger',
    name: 'Nippon Robotics',
    avatar: NIPPON_AVATAR,
    fee: '$120.00',
  },
]

const Badge = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'success' | 'danger' | 'warning'
}) => {
  const styles =
    variant === 'success'
      ? 'bg-lime-500/15 text-lime-800 dark:text-lime-300'
      : variant === 'danger'
      ? 'bg-red-500/15 text-red-800 dark:text-red-300'
      : 'bg-yellow-500/15 text-yellow-800 dark:text-yellow-300'

  return (
    <span className={cn('rounded-full px-2 py-1 text-xs font-medium', styles)}>
      {children}
    </span>
  )
}

export default function ExporterTransactionsCard({
  title = 'Recent E-Attestation Transactions',
  subtitle = 'Live monitoring of Certificates of Origin processed through the digital registry.',
  transactions = DEFAULT_TRANSACTIONS,
  className,
}: ExporterTransactionsCardProps) {
  return (
    <section
      className={cn(
        'bg-background shadow-foreground/5 inset-ring-1 inset-ring-background ring-foreground/5 relative w-full overflow-hidden rounded-2xl border border-border/60 shadow-md ring-1',
        className
      )}
      aria-label={title}
    >
      {/* Header */}
      <div className="space-y-1 border-b border-border/60 p-6">
        <div className="flex items-center gap-1.5">
          <span className="bg-muted size-2 rounded-full border border-black/5" />
          <span className="bg-muted size-2 rounded-full border border-black/5" />
          <span className="bg-muted size-2 rounded-full border border-black/5" />
        </div>
        <h2 className="text-lg font-semibold leading-none tracking-tight">{title}</h2>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      {/* Table wrapper for responsive overflow */}
      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-sm">
          <thead className="bg-muted/50 supports-[backdrop-filter]:backdrop-blur-sm sticky top-0 z-10">
            <tr className="text-muted-foreground *:text-left *:px-3 *:py-3 *:font-medium">
              <th className="w-28 pl-4">Transaction ID</th>
              <th className="min-w-[120px]">Date</th>
              <th className="min-w-[120px]">Status</th>
              <th className="min-w-[220px]">Exporter Member</th>
              <th className="min-w-[120px] text-right pr-4">Processing Fee</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="hover:bg-muted/30 transition-colors *:px-3 *:py-2 border-b border-border/60 last:border-0"
              >
                <td className="text-muted-foreground pl-4 font-mono text-xs">{txn.id}</td>
                <td className="whitespace-nowrap">{txn.date}</td>
                <td>
                  <Badge variant={txn.statusVariant}>{txn.status}</Badge>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="size-7 overflow-hidden rounded-full ring-1 ring-border/60">
                      <img
                        src={txn.avatar}
                        alt={txn.name}
                        width={28}
                        height={28}
                        className="object-cover size-full"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-foreground font-medium truncate">{txn.name}</span>
                  </div>
                </td>
                <td className="text-right pr-4 font-medium tabular-nums">{txn.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/60 p-4 text-xs text-muted-foreground">
        <span>
          Showing <strong>{transactions.length}</strong> transactions
        </span>
        <span>Updated just now</span>
      </div>
    </section>
  )
}
