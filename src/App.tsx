import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Kitchen from "./pages/Kitchen.tsx";

const queryClient = new QueryClient();

const App = () => (
      <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                            <Routes>
                                      <Route path="/" element={<Index />} />
                                      <Route path="/kitchen" element={<Kitchen />} />
                                      <Route path="*" element={<NotFound />} />
                            </Routes>Routes>
                    </BrowserRouter>BrowserRouter>
              </TooltipProvider>TooltipProvider>
      </QueryClientProvider>QueryClientProvider>
    );

export default App</TooltipProvider>
