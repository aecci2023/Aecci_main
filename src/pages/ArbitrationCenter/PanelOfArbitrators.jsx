"use client"
import * as React from "react";
import MainHeader from "../../components/MainHeader";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import panelOfArbitrationBanner from "../../assets/images/headerImages/panelOfArbitrationBanner.png";

const data = [
  { col1: '1', col2: 'Adv. Anand Chawre', col3: 'AECCI-IAC Panel IAC/23-24/110', col4: 'Advocate & Arbitrator',  col5: 'Arbitration,/civil law/criminal law/ constitutional law/service law/labor-industrial law/consumer law/administrative law/taxation law/matrimonial law/debts recovery/land acquisition law/property-related issues/drafting legal documents/ and handling matters for urban cooperative banks, trade unions, and housing societies.', col6: 'Arbitration/ Mediation/conciliation/Drafting ADR Documents &International Arbitration' },
  { col1: '2', col2: 'Adv. Pradeep Samant', col3: 'AECCI-IAC Panel IAC/23-24/111', col4: 'Advocate/Arbitrator/ Insolvency Professional',  col5: 'Litigation/Banking Law/Commercial Law/Property Law/Arbitration/Insolvency Law/ADR/Corporate Due Diligence/Contract Drafting and Management,Consumer Law', col6: 'Arbitration/ Mediation/conciliation/insolvency and liquidation management.' },
  { col1: '3', col2: 'Adv. Rupali S. Akolkar', col3: 'AECCI-IAC Panel IAC/23-24/112', col4: 'Advocate & Arbitrator',  col5: 'Dispute Resolution and Arbitration/Litigation/Drafting Legal Documents/Intellectual Property (IP) Law/Patent Law/Legal Research and Counsel Roles', col6: 'Arbitration/Mediation and Negotiation/Commissioner for Recording Evidence/Empanelled Arbitrator/Legal Drafting for ADR' },
  { col1: '4', col2: 'Adv. Khushnuma Khan', col3: 'AECCI-IAC Panel IAC/23-24/113', col4: 'Advocate and Solicitor & Arbitrator',  col5: 'Dispute Resolution and Arbitration/Litigation/Banking and Finance Law/Property Law/Corporate Law/Insolvency and Bankruptcy Law/RERA Law/Tenancy Law/Joint Ventures and Foreign Investments/Commercial Documentation/Legal Due Diligence/Legal Advisory Services and Speaker', col6: 'Arbitration/Mediation / Negotiation/Legal Drafting' },
  { col1: '5', col2: 'Dr Sudharanjan Sahu', col3: 'AECCI-IAC Panel IAC/23-24/114', col4: 'Arbitrator',  col5: 'Arbitration/Commercial Contracts/Petroleum and Gas/Real Estate/Hospitality Services/Shipping and Barge Transport/Construction Contracts/Civil Contracts/Agency and Distribution and Franchising', col6: 'Arbitration/ Mediation/Conciliation /Negotiation/ Legal Expertise' },
  { col1: '6', col2: 'CA Rajendra Bhuta', col3: 'AECCI-IAC Panel IAC/23-24/115', col4: 'Chartered Accountant/Arbitrator',  col5: 'Arbitration and Dispute Resolution/Insolvency and Bankruptcy/Corporate Finance, Restructuring, and Advisory/Legal Compliance and Governance/Mergers & Acquisitions/Strategic Financial Planning and Management', col6: 'Arbitration/ Mediation/ Conciliation/ Drafting ADR Documents/ International Arbitration/ Insolvency and Bankruptcy/ Financial Expertise' },
  { col1: '7', col2: 'CA Pawan Kumar Aggarwal', col3: 'AECCI-IAC Panel IAC/23-24/116', col4: 'Chartered Accountant/Arbitrator',  col5: 'Projects Finance/Corporate Laws/Takeovers and Mergers/Arbitrations/Conciliation and Mediations/Insolvency and Bankruptcy/Leadership Coaching', col6: 'Arbitration/ Mediation and Conciliation/ Author and Educator/ Legal Expertise/ Professional Associations/ Leadership Coaching' },
];

const columns = [
  {
    accessorKey: "col1",
    header: "SR NO.",
  },
  {
    accessorKey: "col2",
    header: "Name",
  },
  {
    accessorKey: "col3",
    header: "MEMBER OF",
  },
  {
    accessorKey: "col4",
    header: "PROFESSION",
  },
  {
    accessorKey: "col5",
    header: "AREAS OF EXPERTISE",
  },
  {
    accessorKey: "col6",
    header: "ADR SKILLS",
  },
  {
    accessorKey: "col7",
    header: "READ MORE",
  },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PanelOfArbitrators = () => {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <>
      <MainHeader
        heading="AECCI - IAC LIST OF REGISTERED ARBITRATORS"
        text="Meet our AECCI-IAC empaneled arbitrators. With years of experience and expertise, our arbitrators are committed to providing efficient and effective dispute-resolution services for clients worldwide."
        imgUrl={panelOfArbitrationBanner}
      />{" "}
       <div className='mx-auto w-[85vw]'>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter members..."
          value={(table.getColumn("col2")?.getFilterValue() ?? "")}
          onChange={(event) =>
            table.getColumn("col2")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Display <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
      <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center border border-gray-300"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>

    </>
  );
};

export default PanelOfArbitrators;
