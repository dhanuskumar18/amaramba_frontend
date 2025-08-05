import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
export default function KYCFormPage() {
  return (
   <>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
          {/* Row 1: Gender (small) + First Name, Last Name */}
          <div className="flex gap-4">
            <div className="w-24">
              <Label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-2 block">
                Gender
              </Label>
              <Select>
                <SelectTrigger id="gender" className="w-full h-11">
                  <SelectValue placeholder="Mr" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr</SelectItem>
                  <SelectItem value="ms">Ms</SelectItem>
                  <SelectItem value="mrs">Mrs</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                First Name
              </Label>
              <Input id="firstName" placeholder="Your First Name" className="h-11" />
            </div>
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
              Last Name
            </Label>
            <Input id="lastName" placeholder="Your Last Name" className="h-11" />
          </div>
          {/* Row 2: Phone Number, Date of Birth */}
          <div className="flex gap-8">
            <div className="flex-1">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </Label>
              <Input id="phoneNumber" value="46347*******" readOnly className="h-11 " />
            </div>
            <div className="flex-1">
              <Label htmlFor="dob" className="text-sm font-medium text-gray-700 mb-2 block">
                Date of birth
              </Label>
              <div className="relative">
                <Input id="dob" placeholder="dd/mm/yyyy" className="h-11 pr-10" />
                <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
          {/* Row 3: ID/Passport Number */}
          <div>
            <Label htmlFor="idPassportNumber" className="text-sm font-medium text-gray-700 mb-2 block">
              ID/Passport Number
            </Label>
            <Input id="idPassportNumber" value="987*********" readOnly className="h-11 " />
          </div>
          {/* Row 4: Language, Country, NUIT Number */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="language" className="text-sm font-medium text-gray-700 mb-2 block">
                Language
              </Label>
              <Select>
                <SelectTrigger id="language" className="w-full h-11">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="country" className="text-sm font-medium text-gray-700 mb-2 block">
                Country
              </Label>
              <Select>
                <SelectTrigger id="country" className="w-full h-11">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="nuitNumber" className="text-sm font-medium text-gray-700 mb-2 block">
              NUIT Number
            </Label>
            <Input id="nuitNumber" value="987*********" readOnly className="h-11 " />
          </div>
          {/* Row 5: City, State/Province, Postal/Zip Code */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2 block">
                City
              </Label>
              <Select>
                <SelectTrigger id="city" className="w-full h-11">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="ch">Chicago</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="stateProvince" className="text-sm font-medium text-gray-700 mb-2 block">
                State/province
              </Label>
              <Select>
                <SelectTrigger id="stateProvince" className="w-full h-11">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700 mb-2 block">
              Postal/zip code
            </Label>
            <Input id="zipCode" value="123511" readOnly className="h-11 " />
          </div>
          {/* Row 6: Street Address 1, Street Address 2 (side by side) */}
          <div>
            <Label htmlFor="streetAddress1" className="text-sm font-medium text-gray-700 mb-2 block">
              Street address 1
            </Label>
            <Textarea id="streetAddress1" placeholder="Enter your Address" className="min-h-[100px] resize-none" />
          </div>
          <div>
            <Label htmlFor="streetAddress2" className="text-sm font-medium text-gray-700 mb-2 block">
              Street address 2
            </Label>
            <Textarea id="streetAddress2" placeholder="Enter your Address" className="min-h-[100px] resize-none" />
          </div>
          {/* Row 7: Main Business Activity, Account Number */}
          <div>
            <Label htmlFor="businessActivity" className="text-sm font-medium text-gray-700 mb-2 block">
              Main Business activity
            </Label>
            <Select>
              <SelectTrigger id="businessActivity" className="w-full h-11">
                <SelectValue placeholder="Main Business activity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-700 mb-2 block">
              Account number of the central securities exchange <span className="text-gray-400">(Optional)</span>
            </Label>
            <Input id="accountNumber" value="123511" readOnly className="h-11 " />
          </div>
        </div>
   </>
  )
}