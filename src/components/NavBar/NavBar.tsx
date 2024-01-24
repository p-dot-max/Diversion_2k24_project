import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-start w-3/5 font-semibold">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Nav Item 1 */}
          <NavigationMenuItem>
            <Link to={"/"} className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuItem>
          {/* Nav item 2 */}
          <NavigationMenuItem>
            <Link to={"/"} className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuItem>
          {/* Nav item 3 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-slate-200">
                    <Link
                      to={"/prediction"}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-semibold leading-none">
                        Prediction
                      </div>
                      <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                      This technology predicts crop diseases using advanced AI models, offering early detection and actionable solutions for enhanced crop health.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-slate-200">
                    <Link
                      to={"/transportaion"}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-semibold leading-none">
                        Tranportation
                      </div>
                      <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                      Here We utilizes blockchain for transparent supply chains, ensuring traceability and trust throughout the agricultural ecosystem.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Nav item 4 */}
          <NavigationMenuItem>
            <Link to={"/community"} className={navigationMenuTriggerStyle()}>
              Community
            </Link>
          </NavigationMenuItem>
          {/* Nav item 5 */}
          <NavigationMenuItem>
            <Link to={"/contacts"} className={navigationMenuTriggerStyle()}>
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
