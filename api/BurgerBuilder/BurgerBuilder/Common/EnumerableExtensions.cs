using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.Common
{
    public static class EnumerableExtensions
    {
        public static  bool IsEmpty<T>(this List<T> that)
        {
            return that == null || that.Count == 0;
        }
    }
}
