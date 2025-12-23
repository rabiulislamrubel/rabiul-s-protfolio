"use client";

export default function Button() {
    const handleDownload = () => {
        const fileId = "1nUlwuJfS-WUp4ZodwedHmRBNfs903OPp";

        // Direct download URL (better than /view)
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="text-shadow box-shadow rounded-lg py-1 px-3 font-bold"
        >
            Download Resume
        </button>
    );
}