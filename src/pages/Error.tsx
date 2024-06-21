export default function ErrorPage() {
  return (
    <div className="error-page page">
      <h1 className="loader">No Questions Found</h1>
      <p>
        Sorry, there are no questions available for the selected options. This
        is most likely due to the selected category not having enough questions,
        or questions of the selected difficulty or type. Please try again with
        different options.
      </p>
    </div>
  )
}
