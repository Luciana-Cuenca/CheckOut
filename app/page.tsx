import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F3F5FB]">


      {/* HEADER */}

      <header className="bg-[#1A2C8B] text-white pb-28">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 flex justify-between items-center">

          <button className="text-sm text-white/80">
            ← Go Back
          </button>

          <h1 className="text-3xl font-semibold tracking-widest">
            2018
          </h1>

          <button className="text-xl">
            ☰
          </button>

        </div>



        {/* STEPS */}

        <div className="mt-6">

          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            <div className="w-full bg-[#2236A8] px-4 sm:px-6 py-4 flex flex-wrap gap-4 sm:gap-6 items-center">

              <Step n={1} active>
                Personal details
              </Step>

              <Step n={2}>
                Order details
              </Step>

              <Step n={3}>
                Payment
              </Step>

              <Step n={4}>
                Confirmation
              </Step>

              <div className="ml-auto text-white/80 text-sm">
                ← Previous step
              </div>

            </div>

          </div>

        </div>

      </header>



      {/* CONTENT */}

      <section className="-mt-20 px-4 sm:px-6 pb-10 flex justify-center">

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">


          {/* LEFT */}

          <div className="lg:col-span-2 bg-white border border-[#E6E9F3] rounded-md p-4 sm:p-6">

            <div className="flex justify-between mb-6">

              <h2 className="font-semibold text-[#2A3A8F]">
                Order items
              </h2>

              <button className="text-sm text-[#8A94B8]">
                Edit shopping cart
              </button>

            </div>


            <OrderItem
              img="/file (1).svg"
              title="Silicone Case for iPhone 7"
              desc="Midnight Blue, Turquoise Blue"
              qty="2 items"
              price="€ 36.40"
              unit="€ 18.20 per item"
            />

            <OrderItem
              img="/file (2).svg"
              title="Tempered glass for Iphone"
              desc="Size: Iphone 7, Iphone 8"
              qty="4 items"
              price="€ 20.00"
              unit="€ 5.00 per item"
            />

            <OrderItem
              img="/file (3).svg"
              title="Tempered glass for Iphone"
              desc="Size: Iphone 7, Iphone 8"
              qty="4 items"
              price="€ 20.00"
              unit="€ 5.00 per item"
            />

            <p className="text-center text-sm text-[#8A94B8] mt-6">
              Have discount code? Click to enter it.
            </p>

          </div>



          {/* RIGHT */}

          <div className="flex flex-col gap-6">

            <div className="bg-white border border-[#E6E9F3] rounded-md p-6">

              <h3 className="font-semibold text-[#2A3A8F] mb-2">
                Summary
              </h3>

              <p className="text-sm text-[#8A94B8] mb-4">
                The total cost consist of the tax, insurance and the delivery charge.
              </p>

              <SummaryRow name="Subtotal" value="€ 56.40" />
              <SummaryRow name="Delivery" value="FREE" />
              <SummaryRow name="Tax" value="€ 11.84" />
              <SummaryRow name="Insurance" value="€ 7.00" />

              <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-[#2A3A8F]">
                <span>TOTAL:</span>
                <span>€ 75.24</span>
              </div>

            </div>



            <div className="bg-white border border-[#E6E9F3] rounded-md p-6 flex justify-between">

              <span className="text-[#2A3A8F] font-medium">
                Delivery
              </span>

              <button className="w-8 h-8 border rounded-full flex items-center justify-center">
                +
              </button>

            </div>



            <button className="bg-[#2236A8] text-white py-4 rounded-md font-medium">
              Next step
            </button>

          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="bg-white border-t border-[#E6E9F3]">

        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <FooterItem
            icon="/lock-keyhole.svg"
            title="Your information is Safe"
            text="The total cost consist of the tax, insurance and the delivery charge."
          />

          <FooterItem
            icon="/shield-check.svg"
            title="Secure checkout"
            text="The total cost consist of the tax, insurance and the delivery charge."
          />

          <FooterItem
            icon="/headphones.svg"
            title="24/7 Support"
            text="The total cost consist of the tax, insurance and the delivery charge."
          />

        </div>

      </footer>

    </main>
  );
}


/* COMPONENTS */


function Step({
  children,
  n,
  active = false,
}: any) {

  let circle = "bg-[#1A2C8B] text-white"; // 3 y 4 azul oscuro

  if (active) {
    // 1 amarillo
    circle = "bg-yellow-400 text-black";
  }

  if (n === 2) {
    // 2 blanco con azul
    circle = "bg-white text-[#2236A8]";
  }

  return (
    <div className="flex items-center gap-2 text-white">

      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${circle}`}
      >
        {n}
      </div>

      <span>{children}</span>

    </div>
  );
}


function OrderItem({ img, title, desc, qty, price, unit }: any) {
  return (
    <div className="flex gap-4 py-4 border-b border-[#E6E9F3]">

      <Image src={img} alt="" width={60} height={60} />

      <div className="flex-1">

        <p className="font-medium text-[#2A3A8F]">
          {title}
        </p>

        <p className="text-sm text-[#8A94B8]">
          {desc}
        </p>

        <p className="text-sm text-[#8A94B8]">
          Quantity: {qty}
        </p>

      </div>

      <div className="text-right">

        <p className="font-semibold text-[#2A3A8F]">
          {price}
        </p>

        <p className="text-sm text-[#8A94B8]">
          {unit}
        </p>

      </div>

    </div>
  );
}



function SummaryRow({ name, value }: any) {
  return (
    <div className="flex justify-between text-sm py-1">
      <span className="text-[#8A94B8]">{name}</span>
      <span className="text-[#2A3A8F]">{value}</span>
    </div>
  );
}



function FooterItem({ icon, title, text }: any) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-[260px] mx-auto">

      <img src={icon} alt="" className="w-8 h-8" />

      <h4 className="font-semibold text-[#2A3A8F]">
        {title}
      </h4>

      <p className="text-sm text-[#8A94B8]">
        {text}
      </p>

    </div>
  );
}