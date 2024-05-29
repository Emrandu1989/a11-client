

const Faq = () => {
    return (
        <div className="mx-12 space-y-2 mb-12">
              <div>
                   <h2 className="text-center text-3xl font-semibold text-gray-500 my-5">Most Common Question for Query</h2>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    Which is the most popular food in your Restaurant ?
  </div>
  <div className="collapse-content"> 
    <p>Hilsha Curry is the most popular food in Epicurean arena.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
      are there any branches of Epicurean Arena?
  </div>
  <div className="collapse-content"> 
    <p>No. We have no branches. This is our main and only branches</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Is there any option for online Payment?
  </div>
  <div className="collapse-content"> 
    <p>Yes, You can pay by various way. like : bKsh, Nagad and any david and credit card</p>
  </div>
</div>   
        </div>
    );
};

export default Faq;