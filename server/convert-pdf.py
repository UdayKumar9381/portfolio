from pdf2image import convert_from_path
import os

# Define folders
pdf_folder = 'pdfs'
output_folder = 'output'
poppler_path = r'D:\projects\portfolio_project\poppler-24.08.0\Library\bin'  # ✅ Hardcoded poppler path

# Create output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Loop through all PDF files
for file_name in os.listdir(pdf_folder):
    if file_name.endswith('.pdf'):
        pdf_path = os.path.join(pdf_folder, file_name)
        try:
            images = convert_from_path(pdf_path, poppler_path=poppler_path)  # 👈 Use the poppler path
            for i, img in enumerate(images):
                output_path = os.path.join(
                    output_folder, f"{file_name[:-4]}_page_{i + 1}.png")
                img.save(output_path, 'PNG')
            print(f"✅ Converted: {file_name}")
        except Exception as e:
            print(f"❌ Failed: {file_name} — {e}")

print("🎉 All done! PNGs saved in 'output/' folder.")
