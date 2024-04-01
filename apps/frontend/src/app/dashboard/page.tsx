import Link from 'next/link';
import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Mail,
    Bell,
    ChevronDown,
    LayoutGrid,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    BriefcaseBusiness,
    Home,
    UserRound,
    Settings,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ProfileView } from '@/components/charts/ProfileView.charts';

export default function Dashboard() {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 justify-center items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={100}
                                height={300}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden justify-center items-center px-4 my-4 md:flex">
                        <div className="flex flex-col items-center">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/images/avatar.png" />
                                <AvatarFallback>AV</AvatarFallback>
                            </Avatar>

                            <div className="text-center">
                                <h1 className="font-semibold text-2xl">
                                    Hello Dilshan
                                </h1>
                                <p className="text-gray-700">
                                    Product Designer
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                href="#"
                                className="flex items-center text-lg gap-3 font-semibold rounded-lg bg-primary/10 px-3 py-4 text-primary transition-all hover:text-primary"
                            >
                                <LayoutGrid className="h-6 w-6" />
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-lg rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                            >
                                <BriefcaseBusiness className="h-6 w-6" />
                                Jobs
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-lg rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                            >
                                <UserRound className="h-6 w-6" />
                                Profile
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-lg rounded-lg px-3 py-4 text-muted-foreground transition-all hover:text-primary"
                            >
                                <Settings className="h-6 w-6" />
                                Settings
                            </Link>
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card className="relative pb-28 bg-primary/5">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Invite Friends</CardTitle>
                                <CardDescription>
                                    Invite your friends and earn referal bonus
                                    from us.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm">invite now</Button>
                            </CardContent>

                            <Image
                                className="absolute right-0 bottom-0 overflow-hidden"
                                src="/images/dashboard_footer.png"
                                alt="dashboard_footer"
                                width={150}
                                height={150}
                                priority
                            />
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />

                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Orders
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Users className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChart className="h-5 w-5" />
                                    Analytics
                                </Link>
                            </nav>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get
                                            unlimited access to our support
                                            team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="search job title or skill"
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>

                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full px-2 text-primary space-x-1"
                    >
                        <Bell className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full px-2 text-primary space-x-1"
                    >
                        <Mail className="h-5 w-5" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                className="rounded-full px-2 border-primary border space-x-1"
                            >
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src="/images/avatar.png" />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                                <p>Dilshan</p>

                                <ChevronDown className="h-5 w-5" />

                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="max-w-screen-2xl mx-auto flex flex-1 flex-col gap-4 p-4 lg:gap-8 lg:p-8">
                    <div className="grid grid-cols-6 gap-8 px-10">
                        <div className="col-span-4">
                            <ProfileView />
                        </div>

                        <div className="col-span-2">
                            <Card className="p-4">
                                <div className="flex mb-10 px-4 py-2 justify-between items-center">
                                    <div className="font-semibold text-xl">
                                        Jobs for you
                                    </div>
                                    <div className="text-primary font-semibold">
                                        All Jobs
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start space-x-2">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/images/job_logo_one.png" />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">
                                                    Product Designer
                                                </h2>
                                                <p className="text-sm">
                                                    Grameenphone Dhaka,
                                                    Bangladesh
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-primary/90 hover:bg-transparent hover:text-primary font-semibold text-lg px-0"
                                                >
                                                    View Jobs
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/images/job_logo_two.png" />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">
                                                    Product Designer
                                                </h2>
                                                <p className="text-sm">
                                                    Grameenphone Dhaka,
                                                    Bangladesh
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-primary/90 hover:bg-transparent hover:text-primary font-semibold text-lg px-0"
                                                >
                                                    View Jobs
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/images/job_logo_three.png" />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">
                                                    Product Designer
                                                </h2>
                                                <p className="text-sm">
                                                    Grameenphone Dhaka,
                                                    Bangladesh
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-primary/90 hover:bg-transparent hover:text-primary font-semibold text-lg px-0"
                                                >
                                                    View Jobs
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/images/job_logo_four.png" />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">
                                                    Product Designer
                                                </h2>
                                                <p className="text-sm">
                                                    Grameenphone Dhaka,
                                                    Bangladesh
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-primary/90 hover:bg-transparent hover:text-primary font-semibold text-lg px-0"
                                                >
                                                    View Jobs
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/images/job_logo_two.png" />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">
                                                    Product Designer
                                                </h2>
                                                <p className="text-sm">
                                                    Grameenphone Dhaka,
                                                    Bangladesh
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-primary/90 hover:bg-transparent hover:text-primary font-semibold text-lg px-0"
                                                >
                                                    View Jobs
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src="/images/job_logo_one.png" />
                                            <AvatarFallback>AV</AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div>
                                                <h2 className="text-lg font-semibold">
                                                    Product Designer
                                                </h2>
                                                <p className="text-sm">
                                                    Grameenphone Dhaka,
                                                    Bangladesh
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-primary/90 hover:bg-transparent hover:text-primary font-semibold text-lg px-0"
                                                >
                                                    View Jobs
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
