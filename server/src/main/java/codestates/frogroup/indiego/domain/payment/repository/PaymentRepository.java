package codestates.frogroup.indiego.domain.payment.repository;

import codestates.frogroup.indiego.domain.member.entity.Member;
import codestates.frogroup.indiego.domain.payment.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findAllByBuyer(Member buyer);

    Optional<Payment> findByOrderIdAndBuyer(String orderId, Member buyer);

}
