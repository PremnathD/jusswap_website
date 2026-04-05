import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    category: "General",
    items: [
      { q: "What is Jusswap?", a: "Jusswap is a managed transaction platform for buying, selling, swapping, and donating pre-owned items. Unlike regular classifieds, Jusswap handles the entire process — from listing to verified delivery — so every transaction is completed safely." },
      { q: "How is Jusswap different from OLX or Facebook Marketplace?", a: "Traditional platforms just connect buyers and sellers — what happens next is up to you. Jusswap manages the full lifecycle: we assign a delivery agent, verify the product, handle payments in escrow, and ensure the item reaches the buyer. We take accountability for completion." },
      { q: "Is Jusswap available in my city?", a: "Jusswap is currently launching in select cities. We use location-based listings, so you'll see items near you. Check the app for availability in your area — we're expanding fast." },
      { q: "Is Jusswap free to use?", a: "Listing items is free. Jusswap charges a small platform fee and a delivery charge per completed transaction. The exact breakdown is shown clearly before you confirm any order." },
      { q: "Who can use Jusswap?", a: "Anyone with a mobile number can sign up. Verification is done via OTP. Jusswap is built for individuals selling, swapping, or donating pre-owned items — not commercial businesses." }
    ]
  },
  {
    category: "Chat & Calls",
    items: [
      { q: "Can I contact a seller without sharing my phone number?", a: "Yes. Jusswap's in-app chat and call feature lets you message or call any seller directly — your phone number is never revealed. All communication stays inside the app." },
      { q: "What can I share in the chat?", a: "You can send text messages and images of the item. Phone numbers, payment links, and external URLs are automatically blocked to keep conversations safe." },
      { q: "Can I take a deal outside the app?", a: "No. The chat system is designed to keep all deals inside Jusswap. This protects both parties — payments, verification, and dispute resolution only work for orders confirmed within the app." },
      { q: "How do I confirm a deal in chat?", a: "Once you've agreed on the item and price, tap the 'Confirm Deal' button inside the chat window. This locks the deal and begins the order creation process." },
      { q: "Is my chat history saved?", a: "Yes. All your conversations are saved and accessible from your chat history anytime." }
    ]
  },
  {
    category: "Buying & Selling",
    items: [
      { q: "How do I sell an item on Jusswap?", a: "Tap 'Sell' on the home screen, upload at least 2 photos, and our AI will suggest a title, category, and price. Set the condition, add a description, and your listing goes live instantly." },
      { q: "Do I need to meet the buyer in person?", a: "No. A Jusswap agent will come to your address to pick up the item. You never have to meet the buyer." },
      { q: "When do I receive my payment?", a: "Payment is held in escrow when the buyer places the order. It is released to you after the item is delivered and confirmed by the buyer. This usually happens within 24–48 hours of delivery." },
      { q: "What if a buyer claims the item wasn't as described?", a: "Our agent verifies the item against your listing at the time of pickup and uploads photos. If a dispute is raised, our admin team reviews both the listing and the verification photos to make a fair decision." },
      { q: "Can I edit or remove my listing?", a: "Yes. You can edit or delete any active listing from your profile until an order is confirmed against it." },
      { q: "What categories can I sell?", a: "You can sell almost any pre-owned item — electronics, furniture, clothing, books, appliances, sports equipment, and more. Listings are reviewed and any prohibited items are removed." }
    ]
  },
  {
    category: "Swap",
    items: [
      { q: "How does swapping work?", a: "List your item with mode set to 'Swap'. Our AI will suggest matching items from other users. You send a swap request — if the other user accepts, both items are picked up by agents, verified, and delivered to each other." },
      { q: "Do I need to pay for a swap?", a: "No money changes hands in a standard swap. However, if both users agree on a top-up payment for a value difference, that can be negotiated in chat." },
      { q: "What if one item doesn't match its listing during a swap?", a: "Each item is independently verified before delivery. If a mismatch is found, our agent flags it and the issue is escalated to admin before either item is delivered." },
      { q: "Can I cancel a swap after accepting?", a: "You can cancel before the pickup is scheduled. Once agents are assigned and dispatched, cancellation may incur a fee." },
      { q: "How does AI matching work for swaps?", a: "Our AI analyses your item's category, condition, and description and suggests items from other users that are a likely match in value and type. You choose which match to pursue." }
    ]
  },
  {
    category: "Donate",
    items: [
      { q: "How do I donate an item?", a: "Tap 'Donate' on the home screen, upload photos, and describe the item. Set the mode to Donate — the price is automatically zero. Nearby users will be notified and can send you a request." },
      { q: "Can I choose who receives my donated item?", a: "Yes. You'll see all the requests from interested users and can pick the recipient you feel is most suitable." },
      { q: "Is delivery free for donations?", a: "Delivery charges for donations may be subsidised or waived depending on the platform's active policies. The exact fee (if any) will be shown before you confirm." },
      { q: "What do I get for donating?", a: "You earn a 'Generous' trust badge on your profile, which boosts your overall trust score and increases your credibility on the platform." },
      { q: "Can I donate to a specific person or organisation?", a: "Currently, donations go to nearby individual users who request the item. Organisation-level donations are planned for a future phase." }
    ]
  },
  {
    category: "Delivery & Agents",
    items: [
      { q: "Who are Jusswap agents?", a: "Jusswap agents are trained delivery personnel employed or contracted by Jusswap. They handle item pickup, product verification, and final delivery — they are the key layer that makes managed transactions possible." },
      { q: "How do I track my order?", a: "Your order tracking page shows a 6-stage live progress bar: Confirmed → Pickup Scheduled → Picked Up → Verified → Out for Delivery → Delivered. You receive a push notification at every stage." },
      { q: "What time slots are available for delivery?", a: "Available slots are shown at the order confirmation step and depend on agent availability in your area. You pick a slot that works for you." },
      { q: "What if the agent doesn't show up?", a: "Our admin team is notified immediately. A replacement agent is assigned and both buyer and seller are informed with a revised ETA." },
      { q: "Can I reschedule my delivery?", a: "Yes. You can reschedule before the agent is dispatched. After dispatch, rescheduling depends on agent availability." }
    ]
  },
  {
    category: "Payments",
    items: [
      { q: "What payment methods are supported?", a: "Jusswap supports Prepaid (UPI, debit/credit card, net banking) and Cash on Delivery (COD). For COD, the agent collects cash at delivery and the seller receives a payout within 24 hours." },
      { q: "Is my payment secure?", a: "Yes. For prepaid orders, your payment is held in escrow and only released to the seller after confirmed delivery. You are never at risk of paying for something you don't receive." },
      { q: "What is the platform fee?", a: "Jusswap charges a small percentage of the transaction value as a platform fee. The exact amount is shown in the price breakdown before you confirm the order." },
      { q: "How do I get a refund?", a: "If your item is not delivered, or if the product doesn't match the verified listing, a refund is initiated automatically or after admin review. Refunds are processed to your original payment method within 5–7 business days." },
      { q: "Are there any hidden charges?", a: "No. The price breakdown at order confirmation shows the item price, delivery fee, and platform fee clearly. There are no charges beyond what is displayed." }
    ]
  },
  {
    category: "Trust & Safety",
    items: [
      { q: "How does the trust score work?", a: "Your trust score is calculated from completed transactions, average ratings received, response time, dispute history, and listing accuracy. It updates dynamically and is shown on your profile and in chat." },
      { q: "What is a verified badge?", a: "A verified badge means the user has completed OTP verification. Future phases will add KYC-based verification for a higher level of trust." },
      { q: "How is product quality ensured?", a: "Agents verify every item at pickup — they upload photos and confirm the item matches the listing's title, description, and stated condition. If there's a mismatch, delivery is paused and admin is alerted." },
      { q: "What happens if I'm scammed?", a: "Jusswap's escrow system prevents payment fraud — you pay after delivery is confirmed. For product disputes, raise a report with photo evidence and our admin team will review and issue a resolution." },
      { q: "How do I report a user or listing?", a: "You can report any listing or user directly from the product page or chat. Our moderation team reviews all reports and takes action within 24 hours." },
      { q: "Can Jusswap see my chats?", a: "Chats are monitored by automated filters for safety. In the event of a formal dispute, relevant chat history may be reviewed by the admin team." }
    ]
  },
  {
    category: "Account",
    items: [
      { q: "How do I sign up?", a: "Enter your mobile number, verify with an OTP, and complete your profile — name, photo, and location. The whole process takes under 2 minutes." },
      { q: "Can I have multiple accounts?", a: "No. One account per mobile number. Multiple accounts are flagged and may be suspended." },
      { q: "How do I delete my account?", a: "You can request account deletion from your profile settings. Active orders must be resolved before deletion is processed." },
      { q: "What if I forget my login?", a: "Jusswap uses OTP-based login — there's no password to forget. Just enter your registered mobile number and you'll receive an OTP to log in." }
    ]
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex items-start justify-between gap-4 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#111111] text-[15px] sm:text-[16px] group-hover:text-primary-purple transition-colors pr-4">{question}</span>
        <span className="text-primary-purple shrink-0 mt-0.5 transition-transform duration-300">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      {/* Expanding Wrapper */}
      <div 
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] sm:text-[15px] text-[#555555] leading-relaxed pr-6 md:pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqPage = () => {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-start py-16 px-6 min-h-[calc(100vh-80px)] bg-white text-left">
      <div className="w-full max-w-[800px]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-5 tracking-tight">
            Frequently Asked <span className="text-primary-purple">Questions</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            Everything you need to know about swapping, trading, and security on Jusswap.
          </p>
        </div>
        
        {/* FAQ Content Section */}
        <div className="flex flex-col gap-14">
          {faqData.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className="text-[20px] md:text-[22px] font-bold text-[#111111] mb-2 tracking-tight">
                {section.category}
              </h2>
              <div className="flex flex-col">
                {section.items.map((item, itemIdx) => (
                  <FaqItem key={itemIdx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default FaqPage;
