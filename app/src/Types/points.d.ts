export type PointDescriptor = {
    title: string,
    fullLoc: string,
    year: number,
    caption: string,
    storyId: string,
    path: string,
    firstImg: string,
    lastImg: string,
}

export type ClickablePoint = {
    loc: string,
    lat: number,
    lng: number,
    size: number,
    color: string,
    description: PointDescriptor,
}