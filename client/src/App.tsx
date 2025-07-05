import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Home } from "@/pages/Home";
import { QRCode } from "@/pages/QRCode";
import { Help } from "@/pages/Help";
import { Challenge } from "@/pages/Challenge";
import { Map } from "@/pages/Map";
import { Account } from "@/pages/Account";
import { SignOut } from "@/pages/SignOut";
import { SignUp1 } from "@/pages/SignUp1";
import { SignUp2 } from "@/pages/SignUp2";
import { Admin } from "@/pages/Admin";
import { EmailRegistration } from "@/pages/EmailRegistration";
import { EmailSent } from "@/pages/EmailSent";
import { Verification } from "@/pages/Verification";
import { CodeConfirmed } from "@/pages/CodeConfirmed";
import { CompleteProfile } from "@/pages/CompleteProfile";

import "./index.css";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      <Route path="/qrcode" component={QRCode} />
      <Route path="/help" component={Help} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/map" component={Map} />
      <Route path="/account" component={Account} />
      <Route path="/signout" component={SignOut} />
      <Route path="/signup1" component={SignUp1} />
      <Route path="/signup2" component={SignUp2} />
      <Route path="/admin" component={Admin} />
      <Route path="/email-registration" component={EmailRegistration} />
      <Route path="/email-sent" component={EmailSent} />
      <Route path="/verification" component={Verification} />
      <Route path="/code-confirmed" component={CodeConfirmed} />
      <Route path="/complete-profile" component={CompleteProfile} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;