import { useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import profilePhoto from "@/assets/profile-photo.jpg";
import DetailRow from "@/components/DetailRow";
import SectionTitle from "@/components/SectionTitle";
import PhotoGallery from "@/components/PhotoGallery";
import { Heart, Phone, Mail, MapPin, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [downloading, setDownloading] = useState(false);

    const handleDownloadPDF = async () => {
        if (!contentRef.current) return;
        setDownloading(true);
        try {
            const canvas = await html2canvas(contentRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#FAF8F5",
            });
            const imgData = canvas.toDataURL("image/jpeg", 0.95);
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
            let remainingHeight = pdfHeight - pageHeight;
            while (remainingHeight > 0) {
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, pdfHeight);
                remainingHeight -= pageHeight;
            }
            pdf.save("Dev_Jethava_Biodata.pdf");
        } catch (error) {
            console.error("PDF generation failed:", error);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background py-8 px-4">
            {/* Decorative top */}
            <div className="mx-auto max-w-2xl" ref={contentRef}>
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 text-gold mb-2">
                        <div className="h-px w-8 bg-gold-light" />
                        <Heart className="w-4 h-4 fill-gold text-gold" />
                        <div className="h-px w-8 bg-gold-light" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Marriage Biodata
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">श्री गणेशाय नमः</p>
                    <Button
                        onClick={handleDownloadPDF}
                        disabled={downloading}
                        variant="outline"
                        size="sm"
                        className="mt-3 print:hidden border-primary/30 text-primary hover:bg-primary/10"
                    >
                        {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {downloading ? "Generating..." : "Download PDF"}
                    </Button>
                </div>

                {/* Main Card */}
                <div className="bg-card rounded-2xl shadow-card border border-gold-light/30 overflow-hidden">
                    {/* Profile Section */}
                    <div className="bg-gradient-to-b from-cream to-card p-6 sm:p-8 text-center">
                        <div className="mx-auto w-36 h-44 sm:w-40 sm:h-48 rounded-xl overflow-hidden border-4 border-gold-light/50 shadow-soft">
                            <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="mt-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            Dev Pankajbhai Jethava
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1">Sr. Software Engineer • Ahmedabad</p>
                    </div>

                    <div className="p-6 sm:p-8 space-y-6">
                        {/* Personal Details */}
                        <div>
                            <SectionTitle>Personal Details</SectionTitle>
                            <div className="bg-cream/50 rounded-xl p-4">
                                <DetailRow label="Date of Birth" value="19 March 1999" />
                                {/* <DetailRow label="Age" value="28 Years" /> */}
                                <DetailRow label="Height" value="171 cm (5' 7&quot;)" />
                                <DetailRow label="Weight" value="65 Kg" />
                                {/* <DetailRow label="Complexion" value="Fair" /> */}
                                <DetailRow label="Religion" value="Hindu" />
                                <DetailRow label="Caste" value="Mochi" />
                                <DetailRow label="Mother Tongue" value="Gujarati" />
                                {/* <DetailRow label="Marital Status" value="Unmarried" /> */}
                                <DetailRow label="Hobbies" value="Cricket, Chess & Fitness" />
                            </div>
                        </div>

                        {/* Education & Career */}
                        <div>
                            <SectionTitle>Education & Career</SectionTitle>
                            <div className="bg-cream/50 rounded-xl p-4">
                                <DetailRow label="Education" value="M.Tech (Data Science) BITS, Pilani - 2024" />
                                <DetailRow label="" value="BE (IT) SSEC, Bhavnagar - 2020" />
                                <DetailRow label="" value="Diploma (IT) BPTI, Bhavnagar - 2017" />
                                <DetailRow label="Occupation" value="Sr. Software Engineer" />
                                <DetailRow label="Company" value="OpenXcell - Ahmedabad" />
                                {/* <DetailRow label="Annual Income" value="₹8,00,000" /> */}
                            </div>
                        </div>

                        {/* Family Details */}
                        <div>
                            <SectionTitle>Family Details</SectionTitle>
                            <div className="bg-cream/50 rounded-xl p-4">
                                <DetailRow label="Father's Name" value="Pankajbhai Batukbhai Jethava" />
                                <DetailRow label="Father's Occupation" value="Business (Bhavnagar)" />
                                <DetailRow label="Mother's Name" value="Reenaben Pankajbhai Jethava" />
                                <DetailRow label="Mother's Occupation" value="Housewife" />
                                <DetailRow label="Siblings" value="1 Younger Brother" />
                                <DetailRow label="Brother's Occupation" value="Pursuing Study (BE - Electrical Eng.)" />
                                {/* <DetailRow label="Family Type" value="Nuclear" /> */}
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div>
                            <SectionTitle>Photo Gallery</SectionTitle>
                            <PhotoGallery />
                        </div>

                        {/* Contact */}
                        <div>
                            <SectionTitle>Contact Details</SectionTitle>
                            <div className="bg-cream/50 rounded-xl p-4 space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="w-4 h-4 text-gold" />
                                    <span className="text-muted-foreground">Phone:</span>
                                    <span className="font-medium text-foreground"><a href="tel:+91 92281 19216">+91 92281 19216</a></span>
                                </div>
                                {/* <div className="flex items-center gap-3 text-sm">
                                    <Mail className="w-4 h-4 text-gold" />
                                    <span className="text-muted-foreground">Email:</span>
                                    <span className="font-medium text-foreground">rajesh.sharma@email.com</span>
                                </div> */}
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin className="w-4 h-4 text-gold" />
                                    <span className="text-muted-foreground">Address:</span>
                                    <span className="font-medium text-foreground">Bhavnagar, Gujarat - 364002</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center py-4 border-t border-border/40">
                        <div className="inline-flex items-center gap-2 text-gold/60">
                            <div className="h-px w-6 bg-gold-light/50" />
                            <Heart className="w-3 h-3 fill-gold/40 text-gold/40" />
                            <div className="h-px w-6 bg-gold-light/50" />
                        </div>
                    </div>
                </div>

                <p className="text-center text-muted-foreground/50 text-xs mt-6">
                    Created with ❤️ for a beautiful beginning
                </p>
            </div>
        </div>
    );
};

export default Index;
