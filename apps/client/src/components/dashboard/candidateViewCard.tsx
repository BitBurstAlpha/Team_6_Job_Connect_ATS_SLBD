import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

export const CandidateViewCard = () => {
    return (
        <Card className="shadow-md flex flex-col border-neutral-100 overflow-x-hidden ">
            <CardHeader>
                <div className="">
                    <CardTitle className="text-lg">
                        Candidates for you
                    </CardTitle>
                    <Button variant="link" className="px-0">
                        All candidates
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
                <div className="flex h-full justify-center items-center m-auto flex-col gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        No candidates yet
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        No candidates have applied for your job yet. Stay tuned
                        for updates.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
