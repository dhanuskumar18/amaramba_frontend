import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UploadCloud } from "lucide-react"
export default function KYCUploadPage() {
  const UploadArea = ({ title, acceptedFiles }: { title: string; acceptedFiles: string }) => (
    <div className="space-y-2">
      <Label htmlFor={`upload-${title.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-gray-700">
        {title}
      </Label>
      <div className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
        <Input
          id={`upload-${title.toLowerCase().replace(/\s/g, "-")}`}
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-500">
          Drag & Drop or <span className="text-blue-500 font-medium">Choose file</span> to upload
        </p>
        <p className="text-xs text-gray-400">{acceptedFiles}</p>
      </div>
    </div>
  )
  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Document Upload Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* ID Book */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">ID Book</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Please make sure that your file is less than 2mb, and that there are no special characters in the file
                name.
              </p>
              <p className="text-xs text-red-500">
                Should you receive a "BAD Request" error when you submit, please remove any of the following special
                characters from the file name - ~, !, @, #, $, %, ^, &, *, (, ), _, +, =, {'{'}, {'}'}, [, ], :, ;, ", &apos;, &lt;, &gt;, ?, /, \, |, `
              </p>
              <UploadArea title="Upload a Front side card" acceptedFiles="fig, zip, pdf, png, jpg" />
              <UploadArea title="Upload a Back side card" acceptedFiles="fig, zip, pdf, png, jpg" />
            </CardContent>
          </Card>
          {/* ID Card */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">ID Card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Please make sure that your file is less than 2mb, and that there are no special characters in the file
                name.
              </p>
              <p className="text-xs text-red-500">
                Should you receive a "BAD Request" error when you submit, please remove any of the following special
                characters from the file name - ~, !, @, #, $, %, ^, &, *, (, ), _, +, =, {'{'}, {'}'}, [, ], :, ;, ", &apos;, &lt;, &gt;, ?, /, \, |, `
              </p>
              <UploadArea title="Upload a Front side card" acceptedFiles="fig, zip, pdf, png, jpg" />
              {/* <UploadArea title="Upload a Back side card" acceptedFiles="fig, zip, pdf, png, jpg" /> */}
            </CardContent>
          </Card>
          {/* Upload Proof of Address */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Upload Proof of Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Please make sure that your file is less than 2mb, and that there are no special characters in the file
                name.
              </p>
              <p className="text-xs text-red-500">
                Should you receive a "BAD Request" error when you submit, please remove any of the following special
                characters from the file name - ~, !, @, #, $, %, ^, &, *, (, ), _, +, =, {'{'}, {'}'}, [, ], :, ;, ", &apos;, &lt;, &gt;, ?, /, \, |, `
              </p>
              <UploadArea title="Upload Proof of Address" acceptedFiles="fig, zip, pdf, png, jpg" />
            </CardContent>
          </Card>
        </div>
        {/* Done Button */}
        {/* <div className="flex justify-end mt-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 rounded-lg font-semibold text-lg shadow-md w-[20rem]">
            Done
          </Button>
        </div> */}
      </div>
    </div>
  )
}