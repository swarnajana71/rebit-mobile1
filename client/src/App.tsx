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

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Home} />
      <Route path="/qrcode" component={QRCode} />
      <Route path="/help" component={Help} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/map" component={Map} />
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
