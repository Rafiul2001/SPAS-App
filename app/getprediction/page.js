const getPrediction = () => {
  return (
    <div className='max-w-7xl mx-auto py-8 px-3'>
      <h1 className='font-semibold text-xl text-center'>Smart Precision Agriculture System</h1>

      <form className='flex flex-col max-w-lg mx-auto gap-1 mt-8'>
        <section className='grid grid-cols-for-2 w-full items-center gap-3'>
          <label htmlFor="district">District:</label>
          <select className='border rounded-md w-full py-1 px-1' id="district">
            <option value="dhaka">Dhaka</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="sylhet">Sylhet</option>
            <option value="barishal">Barishal</option>
          </select>

          <label htmlFor="year">Year:</label>
          <input className='border rounded-md w-full py-1 px-1 text-right' id="year" type="number" min="2020" max="2050" step="1" defaultValue={2023} />

          <label htmlFor="season">Season:</label>
          <select className='border rounded-md w-full py-1 px-1' id="season">
            <option value="খরিপ-১">খরিপ-১</option>
            <option value="খরিপ-২">খরিপ-২</option>
            <option value="রবি">রবি</option>
          </select>

          <label htmlFor="area">Area in Acre:</label>
          <input className='border rounded-md w-full py-1 px-1 text-right' id="area" type="number" min="0" max="99999" step=".01" defaultValue={0.00} />
        </section>

        <input className='w-fit self-center bg-bg-gray-deep px-5 py-1 text-white rounded-md mt-8 cursor-pointer hover:bg-bg-light-green-c' type="submit" value="Get Prediction" />
      </form>

      <div className='mt-8'>
        <h1 className="text-center">Prediction Result: </h1>
        <p className="text-center mt-5">Result will be display here!</p>
      </div>
    </div>
  )
}

export default getPrediction