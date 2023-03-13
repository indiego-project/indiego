//package codestates.frogroup.indiego.helper;
//
//import codestates.frogroup.indiego.domain.show.dto.ShowDto;
//import codestates.frogroup.indiego.domain.show.entity.Show;
//import com.amazonaws.HttpMethod;
//
//import java.time.LocalDate;
//import java.util.HashMap;
//import java.util.Map;
//
//public class ShowStubData {
//    private static Map<HttpMethod, Object> stubRequestBody;
//    static {
//        stubRequestBody = new HashMap<>();
//        stubRequestBody.put(HttpMethod.POST, new ShowDto.Post("title",
//                "content",
//                "image",
//                "category",
//                70000,
//                "address",
//                "detailAddress",
//                LocalDate.now(),
//                LocalDate.now(),
//                "showTime",
//                "detailImage",
//                37.49665809479805,
//                127.02461285901897 ,
//                30));
//        stubRequestBody.put(HttpMethod.PATCH, new ShowDto.Patch(91L,"title",
//                "content",
//                "image",
//                "category",
//                70000,
//                "address",
//                "detailAddress",
//                LocalDate.now(),
//                LocalDate.now(),
//                "showTime",
//                "detailImage",
//                37.49665809479805,
//                127.02461285901897 ,
//                50));
//
//    }
//
//    public static class MockShow{
//        public static Object getRequestBody(HttpMethod method){ return stubRequestBody.get(method);}
//
//        public static ShowDto.postResponse getPostResponseBody(){
//            return new ShowDto.postResponse( 91L,
//                    "title",
//                     "content",
//                    "image",
//                    "category",
//                     70000,
//                    "address",
//                    "detailAddress",
//                    LocalDate.now(),
//                    LocalDate.now(),
//                    "showTime",
//                    "detailImage",
//                    37.49665809479805,
//                    127.02461285901897,
//                    Show.ShowStatus.SALE.getStatus(),
//                    5D,
//                    30);
//        }
//
//        public static ShowDto.Response getResponseBody(){
//            return new ShowDto.Response(
//                    91L,
//                    "title",
//                    "content",
//                    "image",
//                    "category",
//                    70000,
//                    "address",
//                    "detailAddress",
//                    LocalDate.now(),
//                    LocalDate.now(),
//                    "showTime",
//                    "detailImage",
//                    37.49665809479805,
//                    127.02461285901897,
//                    Show.ShowStatus.SALE.getStatus(),
//                    5D,
//                    30,
//                    50,
//            false,
//            "개구리"
//            );
//        }
//
//
//    }
//}
