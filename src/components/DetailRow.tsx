interface DetailRowProps {
    label: string;
    value: string;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
    <div className="flex justify-between py-2.5 border-b border-border/60 last:border-b-0">
        <span className="text-muted-foreground font-medium text-sm">{label}</span>
        <span className="font-medium text-foreground text-sm text-right">{value}</span>
    </div>
);

export default DetailRow;
