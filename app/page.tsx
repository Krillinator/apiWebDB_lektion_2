// interfaces here
interface Student {
  name: string
  age: number
  isTired: boolean
  subjects: string[]
}

export default function Home() {
  // Typescript Basics

  /* Datatypes */
  // string, number, boolean, tuple, array, object, enum
  // any, void, null, undefined
  // best practice: const
  // best practice: datatypes, lowercase

  const age: number = 15 // int?
  const name: string = "Benny"
  const isSleepy: boolean = false

  const scoreList: number[] = [0, 15, 150] // Same as line bellow
  const scoreList2: Array<number> = [0, 15, 150] // Same as line above
  let tupleScoreList: [number, string] // Tuple - fixed size
  tupleScoreList = [15, ""]

  const myName: any = ""
  // const myVoid: void = void
  const myNull: null = null
  const myUndefined: undefined = undefined

  // Weekdays, Months, Planets, Directions (S, E, W, N)
  // SET of Final Values
  enum Color {
    Red,
    Green,
    Blue,
  }

  const myColor: Color = Color.Red

  const benny: Student = {
    name: "",
    age: 0,
    isTired: false,
    subjects: [],
  }

  const frida: Student = {
    name: "",
    age: 0,
    isTired: false,
    subjects: [],
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> </div>
    </main>
  )
}
