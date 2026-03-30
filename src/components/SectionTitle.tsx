interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
        <h2 className="text-lg font-semibold text-gold tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
            {children}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
    </div>
);

export default SectionTitle;
