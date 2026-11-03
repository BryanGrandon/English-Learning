type BrandProps = {
  size?: string
}

const Brand = ({ size = 'text-xl' }: BrandProps) => {
  return (
    <h3 className={'font-semibold tracking-wide ' + size}>
      English <span className='text-brand'>Learn</span>
    </h3>
  )
}

export default Brand
