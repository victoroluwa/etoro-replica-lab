import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard,
  Smartphone,
  Fingerprint,
  Upload,
  Check,
  X,
  Settings,
  FileText,
  LogOut
} from "lucide-react";

export const Profile = () => {
  const { toast } = useToast();
  const [kycStatus] = useState("verified");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleKYCUpload = () => {
    toast({
      title: "Document Upload",
      description: "Document upload will be available with backend integration.",
    });
  };

  const handleEnable2FA = () => {
    toast({
      title: "2FA Settings",
      description: "Two-factor authentication setup requires backend integration.",
    });
  };

  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    country: "United States",
    joinDate: "January 2024",
    verified: true
  };

  const tradingStats = {
    totalTrades: 156,
    winRate: 67,
    totalProfit: 4567.89,
    riskScore: "Medium"
  };

  const kycDocuments = [
    { type: "Government ID", status: "verified", uploadDate: "2024-01-15" },
    { type: "Proof of Address", status: "verified", uploadDate: "2024-01-16" },
    { type: "Selfie Verification", status: "verified", uploadDate: "2024-01-17" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Profile Settings</h1>
            {userProfile.verified && (
              <Badge variant="default" className="bg-etoro-green">
                <Check className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-white">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <div className="container py-6">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Profile Summary */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-etoro-green/10 flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-etoro-green" />
              </div>
              <CardTitle>{userProfile.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{userProfile.email}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-etoro-green">{tradingStats.winRate}%</div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Trades</span>
                  <span className="font-medium">{tradingStats.totalTrades}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Profit</span>
                  <span className="font-medium text-etoro-green">
                    +${tradingStats.totalProfit.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Risk Score</span>
                  <Badge variant="secondary">{tradingStats.riskScore}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Member Since</span>
                  <span className="font-medium">{userProfile.joinDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="verification">KYC Status</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" defaultValue={userProfile.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue={userProfile.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue={userProfile.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" defaultValue={userProfile.country} />
                      </div>
                    </div>
                    <Button onClick={handleSaveProfile} variant="etoro">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Security Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch 
                          checked={twoFactorEnabled} 
                          onCheckedChange={setTwoFactorEnabled}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Authentication Methods</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Smartphone className="h-5 w-5 text-etoro-green" />
                              <div>
                                <div className="font-medium">SMS Authentication</div>
                                <div className="text-sm text-muted-foreground">+1 (555) ***-4567</div>
                              </div>
                            </div>
                            <Badge variant="default" className="bg-etoro-green">Active</Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Fingerprint className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <div className="font-medium">Biometric Login</div>
                                <div className="text-sm text-muted-foreground">Available on mobile app</div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={handleEnable2FA}>
                              Enable
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Change Password</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input id="currentPassword" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" />
                          </div>
                        </div>
                        <Button variant="etoro">Update Password</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive trade alerts and market updates via email
                          </p>
                        </div>
                        <Switch 
                          checked={emailNotifications} 
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Get instant alerts on your mobile device
                          </p>
                        </div>
                        <Switch 
                          checked={pushNotifications} 
                          onCheckedChange={setPushNotifications}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Alert Types</h4>
                        <div className="space-y-3">
                          {[
                            "Price Alerts",
                            "Trade Executions", 
                            "Margin Calls",
                            "Market News",
                            "Economic Calendar",
                            "Account Activity"
                          ].map((alertType) => (
                            <div key={alertType} className="flex items-center justify-between">
                              <Label className="text-sm">{alertType}</Label>
                              <Switch defaultChecked />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="verification">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      KYC Verification Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-etoro-green/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Check className="h-6 w-6 text-etoro-green" />
                        <div>
                          <div className="font-semibold text-etoro-green">Verification Complete</div>
                          <div className="text-sm text-muted-foreground">All documents verified successfully</div>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-etoro-green">Verified</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Submitted Documents</h4>
                      <div className="space-y-3">
                        {kycDocuments.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-5 w-5 text-etoro-green" />
                              <div>
                                <div className="font-medium">{doc.type}</div>
                                <div className="text-sm text-muted-foreground">
                                  Uploaded on {doc.uploadDate}
                                </div>
                              </div>
                            </div>
                            <Badge variant="default" className="bg-etoro-green">
                              <Check className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Need to update documents?</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload new verification documents if your information has changed.
                      </p>
                      <Button variant="outline" onClick={handleKYCUpload}>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Documents
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};