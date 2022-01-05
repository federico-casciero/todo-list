export interface ToDo {
    id: string;
    task: string;
    image: string;
    user: string | undefined;
    modifing: boolean;
}