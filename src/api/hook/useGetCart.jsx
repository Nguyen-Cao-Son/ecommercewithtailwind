import axiosHelper  from "../axiosHelper";
function useGetCart () {
  const getCart = async () => {
    const res = await axiosHelper.get('Carts/1')
    return res.data
  }
  return getCart
}

export default useGetCart 