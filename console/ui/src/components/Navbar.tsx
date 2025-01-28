import { Menu, ChevronDown, LayoutDashboard, Layers, Box, Package, Sparkles, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Enterprise Suite",
    href: "/products/enterprise",
    description: "Advanced solutions for large organizations",
    icon: Layers,
  },
  {
    title: "Pro Tools",
    href: "/products/pro",
    description: "Professional-grade tools for power users",
    icon: Box,
  },
  {
    title: "Starter Kit",
    href: "/products/starter",
    description: "Perfect for small teams and startups",
    icon: Package,
  },
  {
    title: "New Features",
    href: "/products/new",
    description: "Check out our latest innovations",
    icon: Sparkles,
  },
];

const navigationItems = [
  { title: "Pricing", href: "/pricing" },
  { title: "Docs", href: "/docs" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a className="flex items-center space-x-2" href="/">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Truck Analytics</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Products Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-4 py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-0">
                      <span className="flex items-center gap-1 text-lg font-medium">
                        Products
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          {products.map((product) => (
                            <NavigationMenuLink
                              key={product.title}
                              href={product.href}
                              className="group block space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-0"
                            >
                              <div className="flex items-center gap-3">
                                <div className="rounded-md bg-primary/10 p-1.5 group-hover:bg-primary/15">
                                  <product.icon className="h-5 w-5" />
                                </div>
                                <div className="text-lg font-semibold">{product.title}</div>
                              </div>
                              <p className="line-clamp-2 text-base leading-relaxed text-muted-foreground">
                                {product.description}
                              </p>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Regular Menu Items */}
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        className="group inline-flex h-12 w-max items-center justify-center rounded-md px-5 py-3 text-lg  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50"
                        href={item.href}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Dashboard Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex items-center gap-2 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-0"
              asChild
            >
              <a href="/dashboard">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </a>
            </Button>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="focus-visible:outline-none focus-visible:ring-0">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-4">
                    <div className="border-b pb-4">
                      <p className="text-sm font-medium mb-2">Products</p>
                      {products.map((product) => (
                        <a
                          key={product.title}
                          href={product.href}
                          className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary focus-visible:outline-none"
                        >
                          <product.icon className="h-4 w-4" />
                          {product.title}
                        </a>
                      ))}
                    </div>
                    {navigationItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none"
                      >
                        {item.title}
                      </a>
                    ))}
                    <a
                      href="/dashboard"
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary focus-visible:outline-none"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}