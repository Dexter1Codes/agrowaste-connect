import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertCircle, 
  FileCheck, 
  Lock, 
  Key, 
  PhoneCall, 
  BookOpen, 
  Laptop, 
  FileWarning, 
  Smartphone,
  User,
  Fingerprint 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const SurakshitBharatDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Surakshit Bharat</h1>
          <p className="text-gray-500 mt-2">
            Protecting your farm's digital presence and securing your agricultural data
          </p>
        </div>
        
        <Alert className="bg-amber-50 border-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Cybersecurity awareness is crucial</AlertTitle>
          <AlertDescription className="text-amber-700">
            As agricultural operations become more connected, they become attractive targets for cybercriminals.
            Protecting your digital presence is as important as securing your physical farm.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="security" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="security">Security Essentials</TabsTrigger>
            <TabsTrigger value="threats">Common Threats</TabsTrigger>
            <TabsTrigger value="marketplace">Online Safety</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          {/* Security Essentials Tab */}
          <TabsContent value="security" className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Essential Security Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    <span>Strong Passwords</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Use at least 12-14 characters</li>
                    <li>Mix letters, numbers, and symbols</li>
                    <li>Avoid personal information</li>
                    <li>Use a different password for each account</li>
                    <li>Consider using a password manager</li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-2 text-primary text-sm">
                    Password strength checker →
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Fingerprint className="h-5 w-5 text-purple-500" />
                    <span>Two-Factor Authentication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">
                    Add an extra layer of security to your accounts by requiring a second 
                    verification method beyond just a password.
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Enable 2FA on email, banking, and marketplace accounts</li>
                    <li>Use authenticator apps rather than SMS when possible</li>
                    <li>Keep backup codes in a secure location</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Laptop className="h-5 w-5 text-blue-500" />
                    <span>Device & Software Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Keep all software and devices updated</li>
                    <li>Enable automatic updates when possible</li>
                    <li>Use reputable antivirus software</li>
                    <li>Back up important data regularly</li>
                    <li>Use device encryption when available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-green-500" />
                  <span>Mobile Device Security</span>
                </CardTitle>
                <CardDescription>
                  Protect your smartphone which may contain sensitive farm and financial data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Essential Practices:</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Use strong PINs, passwords, or biometrics</li>
                      <li>Keep your phone's operating system updated</li>
                      <li>Only download apps from official stores</li>
                      <li>Review app permissions before granting access</li>
                      <li>Be cautious on public Wi-Fi networks</li>
                      <li>Avoid charging at public USB ports</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Additional Protection:</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Enable remote tracking and wiping</li>
                      <li>Use encrypted messaging apps when possible</li>
                      <li>Turn off Bluetooth and Wi-Fi when not in use</li>
                      <li>Back up your phone data regularly</li>
                      <li>Install security apps if using Android</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
              <h3 className="text-green-800 font-medium flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Security Assessment
              </h3>
              <p className="text-sm text-green-700 mt-1">
                Take our quick assessment to evaluate your current cybersecurity practices and receive 
                personalized recommendations to better protect your agricultural operations.
              </p>
              <Button className="mt-3 bg-green-600 hover:bg-green-700">
                Start Security Assessment
              </Button>
            </div>
          </TabsContent>
          
          {/* Common Threats Tab */}
          <TabsContent value="threats" className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Common Cyber Threats for Farmers</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <FileWarning className="h-5 w-5 text-red-500" />
                    <span className="font-medium">Phishing Attacks</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="mb-2">
                      Phishing involves deceptive emails, messages, or calls designed to trick you into revealing 
                      sensitive information or installing malware.
                    </p>
                    <h4 className="font-medium mt-3 mb-1">How to spot phishing attempts:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Suspicious sender email addresses or domains</li>
                      <li>Urgent requests for personal or financial information</li>
                      <li>Unexpected attachments or links</li>
                      <li>Poor spelling and grammar (though increasingly sophisticated)</li>
                      <li>Offers that seem too good to be true</li>
                    </ul>
                    <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded text-sm">
                      <p className="text-amber-800 font-medium">Example: </p>
                      <p className="text-amber-700">
                        A farmer might receive a fake invoice from an "agricultural supplier" requesting 
                        immediate payment, or a message claiming their marketplace account has been locked.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">Ransomware</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="mb-2">
                      Ransomware is malicious software that encrypts your files and demands payment for their release.
                      For farms, this can disrupt critical operations like planting, harvesting, or irrigation.
                    </p>
                    <h4 className="font-medium mt-3 mb-1">How to protect yourself:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Maintain regular data backups</li>
                      <li>Keep all software updated</li>
                      <li>Use antivirus and anti-malware protection</li>
                      <li>Be cautious about email attachments and links</li>
                      <li>Limit access to sensitive systems</li>
                    </ul>
                    <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm">
                      <p className="text-red-800 font-medium">Important: </p>
                      <p className="text-red-700">
                        Even if a ransom is paid, there is no guarantee your files will be recovered. 
                        Regular backups are your best defense.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Social Engineering</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="mb-2">
                      Social engineering manipulates people into divulging confidential information or performing 
                      actions that compromise security. Unlike technical attacks, these exploit human psychology.
                    </p>
                    <h4 className="font-medium mt-3 mb-1">Common tactics:</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Pretexting: Creating false scenarios to gain trust</li>
                      <li>Baiting: Offering something enticing to lure victims</li>
                      <li>Impersonation: Posing as trusted individuals or organizations</li>
                      <li>Creating a false sense of urgency</li>
                    </ul>
                    <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-sm">
                      <p className="text-blue-800 font-medium">Protection strategy: </p>
                      <p className="text-blue-700">
                        Always verify requests for sensitive information through official channels, even if 
                        they appear to come from someone you know or trust.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <span>Threat Monitoring</span>
                </CardTitle>
                <CardDescription>
                  Stay informed about current cybersecurity threats targeting the agricultural sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-red-600">Active Phishing Campaign</h4>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">High Risk</span>
                    </div>
                    <p className="text-sm mt-1">
                      There is an ongoing phishing campaign targeting farmers with fake agricultural subsidy emails.
                      These emails claim to offer government payments and request banking details.
                    </p>
                  </div>
                  
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-amber-600">Mobile App Scam</h4>
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Medium Risk</span>
                    </div>
                    <p className="text-sm mt-1">
                      Fake agricultural marketplace apps are circulating on unofficial app stores.
                      Always download apps only from official sources like Google Play or Apple App Store.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">View All Current Threats</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Online Marketplace Safety Tab */}
          <TabsContent value="marketplace" className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Safety on Agricultural Marketplaces</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-red-500" />
                    <span>Common Marketplace Risks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-2">
                    <li><span className="font-medium">Account Takeover:</span> Unauthorized access to your marketplace account</li>
                    <li><span className="font-medium">Payment Fraud:</span> Unauthorized transactions or stolen payment information</li>
                    <li><span className="font-medium">Fake Listings:</span> Fraudulent product listings designed to scam buyers</li>
                    <li><span className="font-medium">Data Breaches:</span> Platform security compromises exposing your information</li>
                    <li><span className="font-medium">Phishing:</span> Fake emails claiming to be from the marketplace</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Secure Buy/Sell Practices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-2">
                    <li>Use strong, unique passwords for marketplace accounts</li>
                    <li>Enable two-factor authentication if available</li>
                    <li>Verify the website is legitimate (check for HTTPS and the lock icon)</li>
                    <li>Be cautious of deals that seem too good to be true</li>
                    <li>Use secure payment methods (credit cards or trusted payment services)</li>
                    <li>Avoid storing payment information on platforms</li>
                    <li>Monitor your account for unauthorized activity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-green-500" />
                  <span>Data Privacy Understanding</span>
                </CardTitle>
                <CardDescription>
                  Key principles from India's data privacy regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Consent</h4>
                      <p className="text-sm">Your data can only be processed with your clear, informed consent</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Purpose Limitation</h4>
                      <p className="text-sm">Your data should only be used for the specified purposes</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Data Minimization</h4>
                      <p className="text-sm">Only necessary data should be collected from you</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Data Security</h4>
                      <p className="text-sm">Platforms must implement reasonable security measures</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Your Rights</h4>
                      <p className="text-sm">You can access, correct, and erase your personal data</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Transparency</h4>
                      <p className="text-sm">You have the right to clear information about data processing</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Data Retention</h4>
                      <p className="text-sm">Your data should not be kept longer than necessary</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Grievance Redressal</h4>
                      <p className="text-sm">You should have a way to report concerns about your data</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
                  <p>The Digital Personal Data Protection Act, 2023 (DPDP Act) and the IT Act are the primary 
                  laws governing data privacy in India. Understanding your rights under these laws can help you 
                  make informed decisions about sharing your information online.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-4">
            <h2 className="text-xl font-semibold mb-2">Educational Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Guides & Documents</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="p-2 border border-gray-200 rounded text-sm hover:bg-gray-50 cursor-pointer">
                    <p className="font-medium">Cybersecurity Guide for Farmers</p>
                    <p className="text-gray-500 text-xs">NCSC</p>
                  </div>
                  <div className="p-2 border border-gray-200 rounded text-sm hover:bg-gray-50 cursor-pointer">
                    <p className="font-medium">Food and Agriculture Cybersecurity Checklist</p>
                    <p className="text-gray-500 text-xs">CISA</p>
                  </div>
                  <div className="p-2 border border-gray-200 rounded text-sm hover:bg-gray-50 cursor-pointer">
                    <p className="font-medium">Digital Personal Data Protection Act Summary</p>
                    <p className="text-gray-500 text-xs">GoI</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary text-sm">
                    View all guides →
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <PhoneCall className="h-5 w-5 text-green-500" />
                    <span>Helplines & Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Cybercrime Reporting</p>
                    <p className="text-green-600">1930</p>
                    <p className="text-xs text-gray-500">National Cybercrime Reporting Portal</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">CERT-In Help Desk</p>
                    <p className="text-green-600">1800-11-4949</p>
                    <p className="text-xs text-gray-500">Indian Computer Emergency Response Team</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Online Reporting</p>
                    <p className="text-green-600">cybercrime.gov.in</p>
                    <p className="text-xs text-gray-500">Report cybercrimes online</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Laptop className="h-5 w-5 text-blue-500" />
                    <span>Training & Webinars</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-2 border border-gray-200 rounded text-sm">
                      <p className="font-medium">Cybersecurity Basics for Farmers</p>
                      <p className="text-xs text-gray-500">Upcoming: April 15, 2025</p>
                    </div>
                    <div className="p-2 border border-gray-200 rounded text-sm">
                      <p className="font-medium">Securing Your Online Marketplace Accounts</p>
                      <p className="text-xs text-gray-500">Upcoming: April 22, 2025</p>
                    </div>
                    <div className="p-2 border border-gray-200 rounded text-sm">
                      <p className="font-medium">Understanding Data Privacy Rights</p>
                      <p className="text-xs text-gray-500">Upcoming: May 5, 2025</p>
                    </div>
                  </div>
                  <Button className="w-full mt-3">Register for Webinars</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <span>Security Certification Program</span>
                </CardTitle>
                <CardDescription>
                  Get certified for following best cybersecurity practices in your agricultural operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The Surakshit Bharat certification program acknowledges farmers and agricultural businesses 
                  that implement best cybersecurity practices. Complete the necessary requirements
                  to earn your certification and demonstrate your commitment to digital security.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div className="bg-primary h-2.5 rounded-full w-[30%]"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Certification Progress: 30% Complete</p>
                <Button className="mt-4 bg-primary text-white">
                  Continue Certification Process
                </Button>
              </CardContent>
              <CardFooter className="bg-gray-50 text-sm border-t">
                Benefits include trust badges for your marketplace profile, priority support, and access to 
                advanced security tools.
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SurakshitBharatDashboard; 