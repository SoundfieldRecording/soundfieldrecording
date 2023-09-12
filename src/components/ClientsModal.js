import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ClientsModal() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  const openButtonRef = useRef(null)

  const callouts = [
    { name: 'Harsha Abeyaratne', },
    { name: 'Acts of Faith – group', },
    { name: 'Chelsea Adams', },
    { name: 'Norma Adams', },
    { name: 'Linda Adkins', },
    { name: 'Mary Adkins', },
    { name: 'After October – band', },
    { name: 'All Ears – band', },
    { name: 'John Allman', },
    { name: 'Almost Famous – band', },
    { name: 'Alpha Pi Sigma – college sorority', },
    { name: 'Antrim Mennonite Choir', },
    { name: 'Back Porch Swing Band', },
    { name: 'Tiffany Beck', },
    { name: 'Jane Bell', },
    { name: 'Matt Bellew', },
    { name: 'Bendt – band', },
    { name: 'Betty Jean', },
    { name: 'Tim Bishop', },
    { name: 'Blood Family – group', },
    { name: 'Bodner, Josh & Alyssa', },
    { name: 'The Bogarts – group', },
    { name: 'Richard Boyer', },
    { name: 'Brothers – group', },
    { name: 'Steve Brown', },
    { name: 'Buddy and Larry', },
    { name: 'John Bugher', },
    { name: 'Perry Burt', },
    { name: 'Beth Caldwell', },
    { name: 'Don Caldwell', },
    { name: 'Sarah Caldwell', },
    { name: 'Adam Calvert', },
    { name: 'Cambridge Middle School cheerleaders', },
    { name: 'Caylee Coulter', },
    { name: 'Christ United Methodist Church', },
    { name: 'Circle\'s Edge – band', },
    { name: 'Jamez Clark', },
    { name: 'Carson Clouse', },
    { name: 'Coldshot – band', },
    { name: 'Doug Coleman', },
    { name: 'LaVawn Coleman', },
    { name: 'Julia Coyle-Wheeler', },
    { name: 'Crooksville Cheerleading', },
    { name: 'Cross, Regina', },
    { name: 'Dan Cunningham', },
    { name: 'Dance Central', },
    { name: 'Pete Deeks', },
    { name: 'Drive South – band', },
    { name: 'Duke Street Kings – band', },
    { name: 'Ear Deep – band', },
    { name: 'Gary Doak', },
    { name: 'Crystal Engle', },
    { name: 'Julie Fondale', },
    { name: 'Friendship Four – group', },
    { name: 'Paul Gillespe', },
    { name: 'Good Times Band', },
    { name: 'Grace Notes – group', },
    { name: 'Kirby Graham', },
    { name: 'GapX – band', },
    { name: 'Colin Gooding', },
    { name: 'Devin Hannahs', },
    { name: 'James Harris', },
    { name: 'Ryan Hawkins', },
    { name: 'Heartstrings – band', },
    { name: 'Ed Helmick', },
    { name: 'April Hewlett-Williams', },
    { name: 'Hibbs Family', },
    { name: 'Tim Hinton', },
    { name: 'Bob Horvath', },
    { name: 'Lois Howard', },
    { name: 'The Hutchisons – band', },
    { name: 'David Jackson', },
    { name: 'Ron Jennings', },
    { name: 'John Glenn High School / JG Company / Marching Band', },
    { name: 'Gary Johnson', },
    { name: 'Angel Jones', },
    { name: 'Berk Jones', },
    { name: 'Gary Keffer', },
    { name: 'Sarah Kimble', },
    { name: 'Kingdom of the Wicked – band', },
    { name: 'Katy Knight', },
    { name: 'Dee Ladd', },
    { name: 'Geraldine Lahna', },
    { name: 'Buddy Larrison', },
    { name: 'Lighthouse Harmony – group', },
    { name: 'Tracy Lingafelter', },
    { name: 'Lock 17 – band', },
    { name: 'Lock & Load – band', },
    { name: 'Longshot – band', },
    { name: 'Lost Mountain – band', },
    { name: 'Love Quartet – group', },
    { name: 'Jimmy Lyons', },
    { name: 'Nancy Mansfield', },
    { name: 'Mastermindz Entertainment', },
    { name: 'Rick Mayer', },
    { name: 'Rob McBurney', },
    { name: 'Mark McCabe', },
    { name: 'Messengers – group', },
    { name: 'Bill Miller', },
    { name: 'Miller Brothers – group', },
    { name: 'Sadie Miller', },
    { name: 'Miller Sisters – group', },
    { name: 'Greg Milleson', },
    { name: 'MOB INC.', },
    { name: 'Monnin family', },
    { name: 'Latoya (Toy) Moorer', },
    { name: 'Carol Morrison', },
    { name: 'Megan Morrow', },
    { name: 'Mother Hag\'s Pride – band', },
    { name: 'Muskyteers', },
    { name: 'Muskingum University', },
    { name: 'Ashley Musser', },
    { name: 'Oath of the Living – band', },
    { name: 'Skeeter Osborne', },
    { name: 'Dick Pavlov', },
    { name: 'Marci Peters', },
    { name: 'Angel Piggot', },
    { name: 'Popular Demand – group', },
    { name: 'Portal – band', },
    { name: 'Steve & Bev Pottmeyer – band', },
    { name: 'Rulon Poulson Band', },
    { name: 'Psychadelic Diciples – band', },
    { name: 'Rags to Riches Dixieland Band', },
    { name: 'Caleb Rolling', },
    { name: 'Jan Rost', },
    { name: 'Charlie Read', },
    { name: 'Chris Reed', },
    { name: 'Jim Reed', },
    { name: 'Sarah Reed', },
    { name: 'Zak Reed', },
    { name: 'Relay for Life', },
    { name: 'Keri Roe', },
    { name: 'Zanesville High School Rosecrans', },
    { name: 'Hurshell Rowan', },
    { name: 'Debbie St.Clair', },
    { name: 'Sydney StClair', },
    { name: 'Sanantone Band', },
    { name: 'Bill Savage', },
    { name: 'Dr. Sayat, Cambridge, OH', },
    { name: 'The Scheffers – group', },
    { name: 'Bryce Seaborn', },
    { name: 'Senecaville Quartet – group', },
    { name: 'Sean Sestina', },
    { name: 'Silverthorn – band', },
    { name: 'Solid Rock Singers – group', },
    { name: 'Cobi Solomon', },
    { name: 'Nyla Stats', },
    { name: 'Rory Stewart', },
    { name: 'Lacy Stillion', },
    { name: 'Colton Sturtz', },
    { name: 'Josie Swartz', },
    { name: 'Tank', },
    { name: 'Dennis Tarman', },
    { name: 'Techniques Studio of Dance', },
    { name: 'The Voices of God\'s Wings – group', },
    { name: 'The Wild Ride – band', },
    { name: 'Thin Ice – band', },
    { name: 'Tim Thomas', },
    { name: 'Trinity Presbyterian Church', },
    { name: 'Conway Turley', },
    { name: 'Kenneth K. Valey, jr.', },
    { name: 'Matteo Verna', },
    { name: 'Linda Voltz', },
    { name: 'Jim Vuksic', },
    { name: 'Scott Walsh', },
    { name: 'Gerald Warner', },
    { name: 'Bobby West', },
    { name: 'Whiskey Beach – band', },
    { name: 'Brian Wilke', },
    { name: 'Rachael Williams', },
    { name: 'Williams Sisters – band', },
    { name: 'Mike Wisecarver', },
    { name: 'Callen Yakubik', },
    { name: 'Carol Yakubik', },
    { name: 'Yourco Brothers – band', },
    { name: 'Zanesville Gymnastics', },
    { name: 'Scott Walsh', },
    { name: 'Payton Zemba', },
    { name: 'Steve Zemba', },
  ]

  return (
    <section>
      <div className="mt-8">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-neutral-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-gray-300 hover:bg-neutral-800 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(true)}
          ref={openButtonRef}
        >
          View partial list of clients
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:h-[calc(100vh-64px)] h-[calc(100vh-100px)] overflow-y-auto">
                  <div className="bg-neutral-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-white">
                          Partial List of Clients
                        </Dialog.Title>
                        <div className="mt-2">
                          {callouts.map((callout) => (
                            <p className="text-sm text-neutral-400">
                              {callout.name}
                            </p>
                          ))}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 sticky bottom-0">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-neutral-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-800 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  )
}