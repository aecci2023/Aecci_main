'use client'

import { cn } from '@/lib/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

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

export default function ExporterTransactionsCard({
  title = 'Recent E-Attestation Transactions',
  subtitle = 'Live monitoring of Certificates of Origin processed through the digital registry.',
  transactions = DEFAULT_TRANSACTIONS,
  className,
}: ExporterTransactionsCardProps) {
  return (
    <Card className={cn('overflow-hidden border border-border shadow-md rounded-2xl', className)}>
      {/* Header */}
      <CardHeader className="space-y-1.5 p-6 border-b border-border/60">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full border border-black/5 bg-primary" />
          <span className="size-2 rounded-full border border-black/5 bg-emerald-400" />
          <span className="size-2 rounded-full border border-black/5 bg-muted-foreground" />
        </div>
        <CardTitle className="text-lg font-bold tracking-tight text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">{subtitle}</CardDescription>
      </CardHeader>

      {/* Content containing Table */}
      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow>
              <TableHead className="w-32 pl-6 font-semibold">Transaction ID</TableHead>
              <TableHead className="min-w-[120px] font-semibold">Date</TableHead>
              <TableHead className="min-w-[120px] font-semibold">Status</TableHead>
              <TableHead className="min-w-[220px] font-semibold">Exporter Member</TableHead>
              <TableHead className="min-w-[120px] text-right pr-6 font-semibold">Processing Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id} className="hover:bg-muted/20 transition-colors">
                <TableCell className="pl-6 font-mono text-xs text-muted-foreground">{txn.id}</TableCell>
                <TableCell className="whitespace-nowrap font-medium">{txn.date}</TableCell>
                <TableCell>
                  {txn.statusVariant === 'success' && (
                    <Badge className="bg-emerald-500/15 dark:bg-emerald-500/25 text-emerald-700 dark:text-emerald-300 border-none hover:bg-emerald-500/20 font-bold uppercase text-[9px] tracking-wider">
                      {txn.status}
                    </Badge>
                  )}
                  {txn.statusVariant === 'warning' && (
                    <Badge className="bg-amber-500/15 dark:bg-amber-500/25 text-amber-700 dark:text-amber-300 border-none hover:bg-amber-500/20 font-bold uppercase text-[9px] tracking-wider">
                      {txn.status}
                    </Badge>
                  )}
                  {txn.statusVariant === 'danger' && (
                    <Badge variant="destructive" className="border-none font-bold uppercase text-[9px] tracking-wider">
                      {txn.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="size-7 overflow-hidden rounded-full ring-1 ring-border">
                      <img
                        src={txn.avatar}
                        alt={txn.name}
                        width={28}
                        height={28}
                        className="object-cover size-full"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-foreground font-semibold truncate">{txn.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6 font-semibold text-foreground tabular-nums">{txn.fee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between border-t border-border/60 px-6 py-4 text-xs text-muted-foreground">
        <span>
          Showing <strong>{transactions.length}</strong> transactions
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Updated just now
        </span>
      </CardFooter>
    </Card>
  )
}

