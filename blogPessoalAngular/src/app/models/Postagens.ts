import { Tema } from "./tema"
import { User } from "./User"


export class Postagem{
    public id: number
    public titulo: string
    public texto: string
    public data: string
    public foto: string
    public usuario: User
    public tema: Tema
}