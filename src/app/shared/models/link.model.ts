export interface Link {
    url : string
    name : string
    children? : Link[]
    isChildrenVisible? : boolean
}