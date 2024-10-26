import {Scroll, Search, ShoppingBag, ArrowRight} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
  } from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
  const items = [
    { icon: Scroll, label: "Catálogo", href: "/" },
    { icon: Search, label: "Categorias", href: "/search" },
    { icon: ShoppingBag, label: "Sacola", href: "/cart" },
  ]
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="flex items-center gap-4">
                      <a href="#" className="cursor-pointer">
                        <Scroll />
                        <span className="font-bold">Catálogo</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarSeparator />
                    <SidebarMenuButton asChild className="flex items-center gap-4">
                      <a href="#" className="cursor-pointer">
                        <Search />
                        <span className="font-bold">Categorias</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarSeparator />
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="flex items-center gap-4">
                      <a href="#" className="cursor-pointer">
                        <ShoppingBag />
                        <span className="font-bold">Sacola</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <div className="flex flex-col items-start justify-center pl-2">
                    <span>R$ 0,00</span>
                    <span>0 produtos</span>
                  </div>
                  <Button>
                    Finalizar
                    <ArrowRight />
                  </Button>
                  <SidebarSeparator className="mt-2" />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
            <div className="flex items-center justify-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex justify-center items-center">
            <span className="text-xs text-gray-500">© 2024 Catálogo</span>
          </div>
        </SidebarFooter>
      </Sidebar>
    )
  }
  