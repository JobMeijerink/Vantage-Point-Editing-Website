import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import PremiereGuide from "@/pages/PremiereGuide";
import Privacy from "@/pages/Privacy";
import AffiliateDisclosure from "@/pages/AffiliateDisclosure";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/premiere-pro-guide" component={PremiereGuide} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/affiliate-disclosure" component={AffiliateDisclosure} />
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
